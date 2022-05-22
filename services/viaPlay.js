const RemoteHelpers = require("../common/helpers/remote")
const { HTTP_METHODS, APP_END_POINTS } = require("../constants");
const { InMemoryCache } = require("./inMemoryCache");

const ViaPlayServices = {
    /**
     * @description this service can be used to fetch movie details from viaPlay api and required it can return only specific fields as a response
     */
    getMovieInfo: async (movie_name, keys = []) => {
        if(InMemoryCache.has(movie_name))
            return InMemoryCache.get(movie_name);
        const movieResponse = await RemoteHelpers.request(HTTP_METHODS.GET,`${APP_END_POINTS.VIA_PLAY_CONTENT_API}/${movie_name}`);
        InMemoryCache.add(movie_name, movieResponse);
        return movieResponse;
    }
}
module.exports = {
    ViaPlayServices
}