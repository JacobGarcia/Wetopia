const mongoose = require('mongoose');

// Tags Schema
var tagSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Tag', tagSchema);
