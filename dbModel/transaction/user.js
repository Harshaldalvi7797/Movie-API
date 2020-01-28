let mongoose = require("mongoose");
let userSchema = new mongoose.Schema({

    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    EmailId: { type: String, required: true }

})

let userModel = mongoose.model("userstocks", userSchema);

module.exports = { userSchema, userModel };