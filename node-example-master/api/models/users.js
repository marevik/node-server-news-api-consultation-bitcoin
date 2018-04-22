const mongoose = require('mongoose');

const authSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String
},{ versionKey: false });

module.exports = mongoose.model('Users', authSchema, 'Users');