const mongoose = require("mongoose");
const {Schema} = mongoose;

const articleSchema = new Schema({
    name:String,
    lastname:String,
    email:String,
    pass:String
})

module.exports = mongoose.model("User",articleSchema);


 