let express = require("express");
let router = express.Router();
let joi = require("@hapi/joi");
let movie = require("../../dbModel/transaction/movie");

router.post("/movie", async (req, res) => {

    let { error } = movieValidationError(req.body);
    if (error) { return res.send(error.details[0].message) }

    let data = new movie.movieModel({
        name: req.body.name,
        actor: req.body.actor,
        price: req.body.price,
        stocks: req.body.stocks
    })
    let item = await data.save();
    res.send({ i: item })



})

function movieValidationError(error) {
    let schema = joi.object({
        name: joi.string().required(),
        actor: joi.string().required(),
        price: joi.string().required(),
        stocks: joi.string().required()

    })
    return schema.validate(error);
}

module.exports = router;