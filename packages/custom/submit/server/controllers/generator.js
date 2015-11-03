'use strict';

var conversion = require("phantom-html-to-pdf")();


module.exports = function(app) {
  return {
    generateReport: function(Submit, app, req, res) {
      var bills = req.body.bills;
      res.header('Content-Type', 'application/pdf');
      Submit.render('bills', {
          package: 'submit',
          bills: bills
        }, function(err, html) {
          conversion({
            html: html
          }, function(err, pdf) {
            // //debugger;
            // var buffer = pdf.stream; // Get buffer
            // var arrayBuffer = new ArrayBuffer(buffer.length); // Start transforming Buffer to ArrayBuffer
            // var views = new Uint8Array(arrayBuffer);
            // for (var i = 0; i < buffer.length; ++i) {
            //   views[i] = buffer[i];
            // }
            // res.type('arraybuffer');
            // res.send(arrayBuffer);
            pdf.stream.pipe(res);
          })
        })
        //bills.fetchBills(app, req, res, sendHTML);
        // Submit.render()
        // phantom.create(function(ph) {
        //     ph.createPage(function(page) {
        //         var file = "/tmp/file.pdf";
        //         page.open("http://localhost:3000/api/submit/fetchBills/render", function(status) {
        //             page.render(file, {
        //                 format: 'pdf',
        //                 quality: '100'
        //             });
        //             res.sendFile(file, function(err) {
        //                 res.json(err);
        //             });
        //         });
        //     });
        // });
    }
  }
};
