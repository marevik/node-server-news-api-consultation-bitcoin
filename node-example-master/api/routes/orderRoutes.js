const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();

const Order = require("../models/order");

router.post('/add', (req, res) => {
    const order = new Order({
        _id: mongoose.Types.ObjectId(),
        title: req.body.title,
        price: req.body.price
    }, {versionKey: false});

    order.save().then(result => {
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

router.delete('/:orderId', (req, res) => {
    const _id = req.params.orderId;
    Order.findByIdAndRemove({"_id":_id}).then( data => {
        res.status(200).json(data);
    }).catch( err=> {
        res.status(500).json({"error" : err})
    })
})

module.exports = router;