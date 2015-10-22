'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Article Schema
 */
var BillSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    expenseDate:{
        type:Date,
        default:Date.now
    },
    description: {
        type: String,
        required: false,
        trim: true
    },
    amount: {
        type: Number,
        required: true,
        trim: true
    }
});

mongoose.model('Bill', BillSchema);