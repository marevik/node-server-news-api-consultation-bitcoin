const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String,
    urlToImage: String
}, {versionKey: false});

module.exports = mongoose.model('News',newsSchema, 'News')