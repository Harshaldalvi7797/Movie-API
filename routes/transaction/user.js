let express = require("express");
let router = express.Router();
let joi = require("@hapi/joi");
let user = require("../../dbModel/transaction/user");

router.post("/user", async (req, res) => {

    let { error } = userValidation(req.body)
    if (error) { return res.send(error.details[0].message) }

    let data = new user.userModel({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        EmailId: req.body.EmailId

    })
    let item = await data.save();
    res.send({ i: item })

});

function userValidation(error) {
    let schema = joi.object({
        FirstName: joi.string().required(),
        LastName: joi.string().required(),
        EmailId: joi.string().required().email()

    })
    return schema.validate(error);
}

module.exports = router;

