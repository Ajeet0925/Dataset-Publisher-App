const {Schema, model, Types} = require("../connection");


const schema = new Schema({
    title : String,
    description : String,
    size : String,
    uploadedBy : {type : Types.ObjectId, ref : "users"},
    type : String,
    details : String,
    thumbnail : String,
    upvotes : {type : Number, default : 0},
    createdAt : Date,
    
})

module.exports = model('datasets', schema);