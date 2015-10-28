'use strict'

var mongoose = require('mongoose'), 
	Schema = mongoose.Schema;

var BillSchema = new Schema({
	created: {
		type: Date,
	},
	billImage: {
		type: String, // store path of image in server
	},
	amount: {
		type: Number,
		required: true
	},
	detail: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		required: true
	},
	claimed: {
		type: Boolean,
		default: false
	}
});

var Bill = mongoose.model('Bill', BillSchema)