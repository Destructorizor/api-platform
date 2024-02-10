const mongoose = require('mongoose');

const apiSchema = new mongoose.Schema({
    title: String,
    description: String,
    code: String,
    language: String,
});

module.exports = mongoose.model('Api', apiSchema);
