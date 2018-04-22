const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();

const Order = require("../models/order");
const News =require("../models/news");

router.post('/', (req, res) => {
    const news = new News({
        _id: mongoose.Types.ObjectId(),
        title: req.body.title,
        description: req.body.description,
        urlToImage:req.body.urlToImage
    }, {versionKey: false});

    news.save().then(result => {
        res.status(200).json({
            "message": "Added",
            "created": result
        });
    }).catch(err => {
        res.status(500).json({
            "error": err
        });
    });
});

module.exports = router;