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

router.get('/:id', (req, res) => {
    // get specific word
    Word.findById(req.params.id, (err, word) => {
        if (err) throw console.log(err);
        res.send(JSON.stringify(word));
    })
})

router.post('/', (req, res) => {
    // save
    const newWord = Word({
        wordEn: req.body.wordEn,
        wordJa: req.body.wordJa,
    });

    newWord.save(err => {
        if (err) throw console.log(err);
        res.send('Success');
    });
})

router.put('/:id', (req, res) => {
    // update
    Word.findById(req.params.id, (err, word) => {
        if (err) throw console.log(err);
        
        word.wordEn = req.body.wordEn;
        word.wordJa = req.body.wordJa;

        word.save(err => {
            if (err) throw console.log(err);
            res.send(JSON.stringify(word));
        })
    })
});

router.delete('/:id', (req, res) => {
    // delete
    Word.findByIdAndDelete(req.params.id, err => {
        if (err) throw console.log(err);
        res.send('Success');
    });
});

module.exports = router;
