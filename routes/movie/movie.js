let express = require("express");
let router = express.Router();
let joi = require("@hapi/joi");

let movie = require("../../dbModel/movie/movie");
let genre = require("../../dbModel/movie/genre");



router.post("/movie", async (req, res) => {
    let { error } = validationError(req.body);
    if (error) { return res.send(error.details[0].message) }

    let G = await genre.genreModel.findById(req.body.genreId);
    if (!G) { return res.status(403).send({ message: "invalid id" }) }

    let data = new movie({

        name: req.body.name,
        actor: req.body.actor,
        price: req.body.price,
        genre: {
            _id: G._id,
            name: G.name
        }


    })
})

function validationError(error) {
    let schema = joi.object({
        name: joi.string().required(),
        actor: joi.string().required(),
        price: joi.string().required(),
        genreId: joi.string().required()
    });
    return schema.validate(error);

} 