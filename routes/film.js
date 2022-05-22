const express = require("express");
const { FilmTrailerController } = require("../controllers");
const router = express.Router();

router.get("/trailer/:film_name", FilmTrailerController.handleFetchTrailer);

module.exports = {
    router
}