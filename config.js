const mongoose = require('mongoose')


mongoose.connect(process.env.DB_URL, {
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