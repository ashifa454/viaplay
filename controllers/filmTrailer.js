const { AppHelpers } = require("../common/helpers/app");
const { ResponseHandler } = require("../common/helpers/response");
const { TheMovieDBService } = require("../services");
const { ViaPlayServices } = require("../services/viaPlay");
const AppController = {
    handleFetchTrailer: async (req, res, next) => {
        try {
            const { film_name } = req.params;
            const movieResponse = await ViaPlayServices.getMovieInfo(film_name);
            const imdb = AppHelpers.getImdbIdFromViaPlayResponse(movieResponse);
            const trailers = await TheMovieDBService.getTrailer(imdb.id);
            return ResponseHandler.send(res,{
                data: trailers
            })
        } catch (err) {
            return ResponseHandler.error(res, {
                data: err.message
            });
        }
    }
}
module.exports = {
    AppController
}