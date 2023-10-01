const Joke = require('../models/joke.model')

//Read - Find All
module.exports = {
    findAllJokes : (req, res) => {
        Joke.find({})
            .then((jokes) => {
                res.json(jokes)
            })
            .catch(err => {
                res.json({ message: 'Something went wrong in find all controllers', error: err })
            })
        },

    //Create - New
    createNewJoke : (req, res) => {
        Joke.create(req.body)
            .then(newlyCreatedJoke => {
                res.json({ joke: newlyCreatedJoke })
            })
            .catch(err => {
                res.json({ message: 'Something went wrong in create controllers', error: err })
            })
        },

    //Read - Find By ID
    findOneJoke : (req, res) => {
        Joke.findOne({ _id: req.params.id })
            .then(oneSingleJoke => {
                res.json({ joke: oneSingleJoke})
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong in find one controllers', error: err })
            })
        },

    //Update
    updateJoke : (req, res) => {
        Joke.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
            )
            .then(updateJoke => {
                res.json({ joke: updateJoke })
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong in update controllers', error: err })
            })
        },

    //Delete
    deleteJoke : (req, res) => {
        Joke.deleteOne({ _id: req.params.id })
            .then(deleted => {
                res.json({ deleted })
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong in delete controller', error: err })
            })
        }
    
}

