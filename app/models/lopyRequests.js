const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LopyRequestSchema = new Schema({
    time: {
        type: Date,
        default: Date.now
    },
    type: {
        type: String,
        trim: true,
        required: true
    },
    request: {
        type: String,
        trim: true,
        required: true
    }
});

module.exports = mongoose.model('LopyRequest', LopyRequestSchema);