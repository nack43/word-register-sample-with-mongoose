const express = require('express');
const router = express.Router();
const Word = require('../models/word');

router.get('/', (req, res) => {
    // get all documents
    Word.find({}, (err, words) => {
        if (err) throw console.log(err);
        res.send(JSON.stringify(words));
    })
})

router.post('/word', (req, res) => {
    // save
    const newWord = Word({
        wordEn: req.body.wordEn,
        wordJa: req.body.wordJa,
    });

    newWord.save(err => {
        if (err) throw console.log(err);
        res.send('Sucsess');
    });
})

router.put('/word/:id', (req, res) => {
    // update
});

module.exports = router;
