const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const msgSchema = new mongoose.Schema({
    to : String,
    from : String,
    cid : String,
    msg : String,
    log : String,
    status : { type : Number, default : false},
    createdAt : { type : Date, default : Date.now}
})


const messages = new mongoose.model('messages',msgSchema);
module.exports = messages
