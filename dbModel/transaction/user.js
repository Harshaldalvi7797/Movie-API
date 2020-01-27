let mongoose = require("mongoose");
let usermovieSchema = new mongoose.Schema({

    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Emailid: { type: String, required: true }

})

let userModel = mongoose.model("usermoviestocks", usermovieSchema);

module.exports = { usermovieSchema, userModel };