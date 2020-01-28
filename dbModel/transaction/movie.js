let mongoose = require("mongoose");

let movieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    actor: { type: String, required: true },
    price: { type: String, required: true },
    stocks: { type: String, required: true }

})

let movieModel = mongoose.model("moviestocks", movieSchema);

module.exports = { movieSchema, movieModel };