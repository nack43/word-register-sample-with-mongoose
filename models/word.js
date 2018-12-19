const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
    wordEn: String,
    wordJa: String,
})

const Word = mongoose.model('Word', wordSchema);

module.exports = Word;
