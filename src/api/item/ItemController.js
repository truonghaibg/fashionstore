var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var VerifyToken = require('../auth/VerifyToken');

router.use(bodyParser.urlencoded({ extended: true }));
var Item = require('./Item');
// ADD THIS PART
// CREATES A NEW Item
router.post('/', /*VerifyToken,*/ function (req, res) {

    Item.create({
            name : req.body.name,
            total : req.body.total,
            description : req.body.description,
            image : req.body.image,
            createdTime: req.body.createdTime
        }, 
        function (err, Item) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(Item);
        });
});

// RETURNS ALL THE ItemS IN THE DATABASE
router.get('/', /*VerifyToken,*/ function (req, res) {
    Item.find({}, function (err, Items) {
        if (err) return res.status(500).send("There was a problem finding the Items.");
        res.status(200).send(Items);
    });
});

// GETS A SINGLE Item FROM THE DATABASE
router.get('/:id', /*VerifyToken,*/ function (req, res) {
    Item.findById(req.params.id, function (err, Item) {
        if (err) return res.status(500).send("There was a problem finding the Item.");
        if (!Item) return res.status(404).send("No Item found.");
        res.status(200).send(Item);
    });
});

// DELETES A Item FROM THE DATABASE
router.delete('/:id', /*VerifyToken,*/ function (req, res) {
    Item.findByIdAndRemove(req.params.id, function (err, Item) {
        if (err) return res.status(500).send("There was a problem deleting the Item.");
        res.status(200).send("Item "+ Item.name +" was deleted.");
    });
});

// UPDATES A SINGLE Item IN THE DATABASE
router.put('/:id', /*VerifyToken,*/ function (req, res) {

    Item.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, Item) {
        if (err) return res.status(500).send("There was a problem updating the Item.");
        res.status(200).send(Item);
    });
});

module.exports = router;