// @ts-nocheck
let express = require("express");
let router = express.Router();
let joi = require("@hapi/joi");
let fawn = require("fawn");

let userMovie = require("../../dbModel/transaction/userMovie");
let user = require("../../dbModel/transaction/user");
let movie = require("../../dbModel/transaction/movie");

router.post("/usermovie", async (req, res) => {
    let { error } = userMovievalidation(req.body);
    if (error) { return res.send(error.details[0].message) }



    let userstocks = await user.userModel.findById(req.body.userId);

    if (!userstocks) { return res.status(403).send({ message: "invalid user id" }) }

    let movietocks = await movie.movieModel.findById(req.body.movieId);
    if (!movietocks) { return res.status(403).send({ message: "invalid movie id" }) }
    console.log(movietocks);

    let data = new userMovie({

        userId: {
            FirstName: userstocks.FirstName,
            // @ts-ignore
            LastName: userstocks.LastName,
            EmailId: userstocks.EmailId

        },

        movieId: {
            name: movietocks.name,
            actor: movietocks.actor,
            price: movietocks.price


        }


    });
    //     .update("moviestocks", { _id: movietocks._id },
    //     {
    //         $inc: {
    //             stocks: -1
    //         }
    //     }
    // )



    try {
        fawn.Task().save("udata", data).update("moviestocks", { _id: movietocks._id }, { $inc: { stocks: -1 } })
            .run();
        res.send(data);



    }
    catch (ex) {
        res.send(ex.message);
    }





    // let item = await data.save();
    // res.send(item);
    // movietocks.stocks--;

    // res.send(item);




})

function userMovievalidation(error) {
    let schema = joi.object({
        userId: joi.string().required(),
        movieId: joi.string().required()

    })
    return schema.validate(error);
}




module.exports = router;