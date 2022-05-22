const express = require("express");
const { FilmRoutes } = require("./routes");
require("dotenv").config();
const app = express();

/**
 * @description we can also add additional layer of validation here using express middlewares, but for this api we can skip that
 */
app.use("/film", FilmRoutes);
/**
 * @description Start Listining on the configured port
 */
app.listen(process.env.APP_PORT, () => {
    console.log(`Server is Listening on ${process.env.APP_PORT}`);
})
// exporting app to be able to load in test
module.exports = {
    app
}