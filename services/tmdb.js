const { AppHelpers } = require("../common/helpers/app");
const RemoteHelpers = require("../common/helpers/remote")
const { HTTP_METHODS, APP_END_POINTS, AppErrorCodes } = require("../constants");
const { InMemoryCache } = require("./inMemoryCache");

const TheMovieDBService = {
    getTrailer: async (imdbId) => {
        if(!process.env.THE_MOVIE_DB_CREDS)
            throw new Error(AppErrorCodes.APP_ERROR_E1);
        if (InMemoryCache.has(`trailer:${imdbId}`))
            return InMemoryCache.get(`trailer:${imdbId}`);
        const movieVideos = await RemoteHelpers.request(HTTP_METHODS.GET,`${APP_END_POINTS.THE_MOVIE_DB_MOVIES_ENDPOINT}/${imdbId}/videos?api_key=${process.env.THE_MOVIE_DB_CREDS}`);
        const official_trailers = (movieVideos || {}).results.filter((item) => {
            return item.official === true && item.type === 'Trailer' && item.site === 'YouTube'
        });
        const youtubeTrailerLinks = AppHelpers.createYoutubeLinks(official_trailers);
        InMemoryCache.add(`trailer:${imdbId}`, youtubeTrailerLinks);
        return youtubeTrailerLinks;
    }
}
module.exports = {
    TheMovieDBService
}