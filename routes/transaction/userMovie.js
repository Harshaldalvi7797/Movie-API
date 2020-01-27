let express = require("express");
let router = express.Router();
let joi = require("@hapi/joi");

let userMovie = require("../../dbModel//transaction/userMovie");
let user = require("../../dbModel/transaction/user");
let movie = require("../../dbModel/transaction/movie");

router.post("/usermovie", async (req, res) => {
    let { error } = userMovievalidation(req.body);
    if (error) { return res.send(error.details[0].message) }

    let userstocks = await user.userModel.findById(req.body.userId);
    if (!userstocks) { return res.status(403).send({ message: "invalid user id" }) }

    let movietocks = await user.movieModel.findById(req.body.userId);
    if (!movietocks) { return res.status(403).send({ message: "invalid movie id" }) }

    let data = new userMovie({
        userId: {
            FirstName: userstocks.FirstName,
            LastName: userstocks.LastName,
            EmailID: userstocks.EmailId

        },

        movieId: {
            name: movietocks.name,
            actor: movietocks.actor,
            price: movietocks.price


        }


    })
    let item = data.save();
    res.send(item);



})

function userMovievalidation(error) {
    let schema = joi.object({
        userId: joi.string().required(),
        movieId: joi.string().required()

    })
    return schema.validate(error);
}




module.exports = router;