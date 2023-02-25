const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "{PATH} is a required field."],
            minlength: [3, "{PATH} must be 3 characters long"]
        },
        store: {
            type: Number,
            required: [true, "{PATH} must be unique number greater than 0."],
            min: [0, "{PATH} must be greater than 0"]
        },
        open: {
            type: Boolean,
            default : false
        }
    },
    {timestamps: true})

const Store = mongoose.model("store", StoreSchema);

module.exports = Store;