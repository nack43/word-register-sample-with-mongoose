const express = require('express');
const router = express.Router();
const Word = require('../models/word');

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
