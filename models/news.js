const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    author: {
        type: String,
        required: true
    },
    datePublished: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('News', newsSchema);
