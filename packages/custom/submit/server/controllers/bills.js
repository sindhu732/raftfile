'use strict';
var mongoose = require('mongoose');
var Bill = mongoose.model('Bill');



module.exports = function(app) {
    return {
        fetchBills: function(app, res, req, db) {
            var bills = Bill.find();
            res.sendJSON(bills);
        },
        saveBill: function(app, res, req, db) {
            var bill = new Bill({
                amount: 200,
                description: 'test'
            });
            debugger;
            bill.save(function(err) {
                if (err) {
                    res.json(err);
                    res.status(404);
                    return;
                }
                res.json({
                    ok: 'ok'
                }).status(200);

            });
        }
    }
};