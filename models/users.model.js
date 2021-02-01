const mongoose = require("mongoose");
const {Schema} = mongoose;

const articleSchema = new Schema({
    firstname:String,
    lastname:String,
    email:String,
    pass1:String
})

module.exports = mongoose.model("User",articleSchema);


 