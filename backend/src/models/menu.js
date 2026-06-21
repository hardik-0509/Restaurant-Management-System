import mongoose, { Schema } from 'mongoose';

const menuSchema = new Schema({

    itemName: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    price: {
        type: Number,
        required: true
    },

    image: {
        type: String
    }

}, { timestamps: true });

export const Menu = mongoose.model('Menu', menuSchema);