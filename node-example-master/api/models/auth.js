const mongoose = require('mongoose');

const authSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String
});

module.exports = mongoose.model('Auth', authSchema, 'Auth');