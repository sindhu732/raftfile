'use strict';

var phantom = require('phantom');


module.exports = function(app) {
    return {
        generateReport: function(app, res) {
            phantom.create(function(ph) {
                ph.createPage(function(page) {
                    var file = "/tmp/file.pdf";
                    page.open("http://localhost:3000/api/submit/fetchBills/render", function(status) {
                        page.render(file, {
                            format: 'pdf',
                            quality: '100'
                        });
                        res.sendFile(file, function(err) {
                            res.json(err);                       
                        });
                    });
                });
            });
        }
    }
};