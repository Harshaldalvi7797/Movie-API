let express = require("express");
let router = express.Router();
let joi = require("@hapi/joi");
let genre = require("../../dbModel/movie/genre");


router.post("/genre", async (req, res) => {
    let { error } = genreValidation(req.body);
    // @ts-ignore
    // if (error) { return res.status(error.details[0].message) };
    // if (error) { return res.status(403).send(error.details[0].message) }
    if (error) { return res.send(error.details[0].message) }

    let data = new genre.genreModel({
        name: req.body.name
    });
    let item = data.save();
    res.send({ i: item })

})

function genreValidation(error) {
    let schema = joi.object({
        name: joi.string().required()
    })
    return schema.validate(error);

}

module.exports = router;