const { default: mongoose } = require("mongoose");

const citySchema = mongoose.Schema({

});


const city = new mongoose.model('city', citySchema);

module.exports = city;