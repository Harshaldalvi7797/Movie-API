let mongoose = require("mongoose");
let movie = require("../../dbModel/transaction/movie")
let user = require("../../dbModel/transaction/user");
let usermovieSchema = new mongoose.Schema({


    userId: { type: user.userSchema, required: true },

    movieId: { type: movie.movieSchema, required: true }

});

let userMovieModel = mongoose.model("udata", usermovieSchema);

module.exports = userMovieModel;