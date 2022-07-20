const mongoose = require('mongoose')

const carSchema = mongoose.Schema(
    {
        car_name: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        in_stock: {
            type: Boolean,
            required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('car', carSchema)