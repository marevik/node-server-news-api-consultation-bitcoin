const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const Auth = require('../models/auth');

// router.get('/', (req, res)=>{   
//     res.status(200).json({        
//         "message": "Hello world API"
//     });
// });


router.post('/', (req, res)=>{
    const auth = new Auth({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name
    });
    auth.save().then(result=>{
        console.log(result);
        res.status(201).json({                
            "message": "Handling POST requests to /products",
            "createdProduct": result
        });
    }).catch(err=>{
        console.log(err)
        res.status(500).json({
            error: err
        });
    });    
});
router.get('/:authId', (req, res)=>{
    const _id = req.params.authId;
    Auth.findById(_id).then(doc=>{
        console.log(doc, 'test');
        res.status(200).json(doc)
    }).catch(err => {
        console.log(err);
        res.status(500).json({error: err})
    });
});
module.exports = router;
