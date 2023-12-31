const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    name: {
        type: String
    },
    joke: {
        type: String
    }
});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;

