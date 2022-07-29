const express = require("express");
const port = 5000;
const app = express();

//importing user router
const userRouter = require("./routers/userRouter")

//giving path
app.use("/user", userRouter)

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
