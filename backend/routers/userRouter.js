const Model = require('../models/userModel');
const router = require('express').Router();

// const express = require('express');
// const router = express.Router();

// add user
// fetch all users
// fetch user by id
// update user
// delete user
// authenticate user

// performing db operations
// to add
router.post('/add', (req, res) => {
    // reading client data from request body
    console.log(req.body);
    // res.send('response from user router');

    // Create Operation
    new Model(req.body).save()
        .then((result) => {
            console.log(result);
            console.log('data saved');
            res.json(result);
        }).catch((err) => {
            console.error(err);
            res.json(err);
        });
})

router.get('/getall', (req, res) => {
    Model.find({})
    .then((result) => {
        console.log(result);
        setTimeout(() => {
            res.json(result);
        }, 500);
    }).catch((err) => {
        console.error(err);
        res.json(err);
    });
    // res.send('response from user router at getall');
});


module.exports = router;