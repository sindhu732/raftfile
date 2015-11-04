'use strict';

/*var multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty();*/

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Addbill, app, auth, database) {
  var addbill = require('../controllers/addbill')(app);

  app.get('/api/addbill/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/api/addbill/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/api/addbill/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.post('/api/addbill/upload/url', function(req, res) {
    console.log("in route");
    addbill.uploadImg(req, res);
  })

  app.post('/api/addbill/postbill', function(req, res) {
    console.log("Posted");
    addbill.postBill(req,res);
  });

  app.get('/api/addbill/getbills', function(req, res) {
    console.log("Get Bills");
    addbill.getBills(req, res);
  });

  app.post('/api/addbill/claim', function(req, res) {
    console.log("Claim Bills");
    addbill.claimBills(req, res);
  });

  app.post('/api/addbill/deletebill', function(req) {
    console.log("To delete Bill");
    addbill.deleteBills(req);
  });


  app.get('/api/addbill/example/render', function(req, res, next) {
    Addbill.render('index', {
      package: 'addbill'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
