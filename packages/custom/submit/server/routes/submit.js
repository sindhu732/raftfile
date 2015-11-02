'use strict';



/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Submit, app, auth, database) {
  var generator = require('../controllers/generator')(app);


  app.get('/api/submit/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });
  app.get('/submit/loggedin', auth.requiresLogin, function(req, res, next) {

  });
  app.get('/api/submit/login', function(req, res, next) {
    console.log('render');
  });

  app.get('/api/submit/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.post('/api/submit/generateReport', function(req, res, next) {

  })

  app.post('/api/submit/generateClaim', function(req, res, next) {
    generator.generateReport(Submit, app, req, res);
  });

  // app.get('/api/submit/fetchBills/render', function(req, res, next) {
  //
  // })
  app.get('/api/submit/save/render', function(req, res, next) {
    var bills = require('../controllers/bills')(app);
    var bills = bills.saveBill(app, req, res, database);
  })

  app.get('/api/submit/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/api/submit/example/render', function(req, res, next) {
    Submit.render('login', {
      package: 'submit'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
