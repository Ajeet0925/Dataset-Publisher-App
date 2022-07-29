const {Schema, model, Types} = require("../connection");


const schema = new Schema({
    title : String,
    description : String,
    size : String,
    uploadedBy : {type : Types.ObjectId, ref : "users"},
    type : String,
    details : String,
    upvotes : {type : Number, default : 0},
})

module.exports = model('datasets', schema);