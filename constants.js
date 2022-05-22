const HTTP_METHODS = {
    GET: 'get',
    POST: 'post',
    DELETE: 'delete'
}
const APP_END_POINTS = {
    VIA_PLAY_CONTENT_API: 'https://content.viaplay.se/pc-se/film',
    THE_MOVIE_DB_MOVIES_ENDPOINT: 'https://api.themoviedb.org/3/movie',
    YOUTUBE_EMBED_PLAY_LINK: 'https://www.youtube.com/watch?v='
}
const AppErrorCodes = {
    APP_ERROR_E1: "MOVIE DB CREDS ARE UNAVAILABLE",
}
module.exports = {
    APP_END_POINTS,
    HTTP_METHODS,
    AppErrorCodes
}