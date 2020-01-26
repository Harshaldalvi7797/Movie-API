let mongoose = require("mongoose");

let genreSchema = new mongoose.Schema({
    name: { type: String, required: true }
});

let genreModel = mongoose.model("geners", genreSchema);

module.exports = { genreModel, genreSchema };