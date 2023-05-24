const mongoose = require("mongoose")


const dataSchema = mongoose.Schema({
    name : String,
    email : String,
    contect : String,
})


const DataModel = mongoose.model("data" , dataSchema)

module.exports={DataModel}