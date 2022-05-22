const { APP_END_POINTS } = require("../../constants");

const AppHelpers = {
    getImdbIdFromViaPlayResponse: (payload) => {
        return ((((payload||{})._embedded["viaplay:blocks"][0]||{})._embedded['viaplay:product']||{}).content||{}).imdb;
    },
    // pass payload as array
    createYoutubeLinks: (payload = []) => {
        return payload.map((item) => {
            return `${APP_END_POINTS.YOUTUBE_EMBED_PLAY_LINK}${item.key}`
        });
    }
}
module.exports = {
    AppHelpers
}