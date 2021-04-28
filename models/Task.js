const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    start: {
        type: Date,
        required: true
    },
    // time: {
    //     type: Date,
    //     required: false
    // },
    assignedTo: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    assignedFrom: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    priority: {
        type: Number,
        required: false
    },
    color: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Task', TaskSchema);