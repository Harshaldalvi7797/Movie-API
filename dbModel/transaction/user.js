let mongoose = require("mongoose");
let userSchema = new mongoose.Schema({

    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Emailid: { type: String, required: true }

})

let userModel = mongoose.model("user", userSchema);

module.exports = { userSchema, userModel };