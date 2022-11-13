const mongoose = require('mongoose');

let options = {
    timestamps: {
        createdAt: 'created_on',
        updatedAt: 'updated_on'
    }
};

const ImageSchema = mongoose.Schema({
    label: {
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true
     }
}, options)

module.exports = mongoose.model('Image', ImageSchema);
