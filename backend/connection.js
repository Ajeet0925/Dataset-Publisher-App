const { default: mongoose } = require("mongoose");

const url = "mongodb+srv://ajeet:ajeet@cluster0.2qbmx3p.mongodb.net/DatasetPublisher?retryWrites=true&w=majority";

// Promise

mongoose
    .connect(url)
    .then((result) => {
        console.log('database connected');
    }).catch((err) => {
        console.error(err);
    });

module.exports = mongoose;