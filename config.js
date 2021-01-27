const mongoose = require('mongoose')
const DB_URL = process.env.DB_URL

mongoose.connect(DB_URL, {
    useNewUrlParser:true, 
    useUnifiedTopology:true
}).then(res => {
    console.log("Connected") 
}).catch(err => {
    console.error(err.message)
})


module.exports = {
    mongodbUrl: process.env.DB_URL
}