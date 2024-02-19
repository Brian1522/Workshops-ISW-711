const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: function(value){
            return value.length > 0;

        },
        message: 'El campo "name" debe tener al menos un carácter.'
        
    },
    age: {
        type: Number,
        required: true
        
    }
});///

module.exports = mongoose.model('Data', dataSchema)
