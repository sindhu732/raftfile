'use strict';
var mongoose = require('mongoose');
var Bill = mongoose.model('Bill');



module.exports = function(app) {
    return {
        fetchBills: function(app, req, res, sendHTML) {
            Bill.find({},function(err,bills){
                sendHTML(bills);
            });
        },
        saveBill: function(app, req, res, db) {
            var bill = new Bill({
                amount: 200,
                description: 'test'
            });
            bill.save(function(err) {
                console.log('inside call back');
                if (err) {
                    res.json(err);
                    res.status(404);
                    return;
                }
                res.json({
                    ok: 'ok'
                });
                res.status(200);

            });
        }
    }
};