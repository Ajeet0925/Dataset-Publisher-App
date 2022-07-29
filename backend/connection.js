const { default: mongoose } = require("mongoose");

const url = "mongodb+srv://ajeet2509:Singhajeet2509@cluster0.suubfhs.mongodb.net/datasetpublisher?retryWrites=true&w=majority";

// Promise

mongoose
    .connect(url)
    .then((result) => {
        console.log('database connected');
    }).catch((err) => {
        console.error(err);
    });

module.exports = mongoose;