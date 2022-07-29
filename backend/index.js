const express = require("express");
const port = 5000;
const app = express();

//importing user router
const userRouter = require("./routers/userRouter")
//importing dataSet router
const dataSetRouter = require("./routers/dataSetRouter")
//importing util
const util = require("./routers/util")

const cors = require('cors');

//to allow react frontend to to access the backend 
app.use(cors({origin: 'http://localhost:3000' }));

// to parse json data
app.use(express.json());

//giving path
app.use("/user", userRouter)
app.use("/data", dataSetRouter)
app.use("/util", util)

// route or endpoint
app.get('/', (request, response) => {
    response.send("response from express");
});

app.get('/home', (request, response) => {
    response.send("express home");
});


// starting the server
app.listen( port, () => {
    console.log('server started');
} );

//nodemon - package to restart server
