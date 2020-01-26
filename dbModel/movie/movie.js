let mongoose = require("mongoose");
let genre = require("../../dbModel/movie/genre")

let movieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    actor: { type: String, required: true },
    price: { type: String, required: true },
    genre: { type: genre.genreSchema }
});

let movieModel = mongoose.model("movies", movieSchema);

module.exports = movieModel;
