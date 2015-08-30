'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function (Submit, app, auth, database) {

    app.get('/api/submit/example/anyone', function (req, res, next) {
        res.send('Anyone can access this');
    });
    
    app.get('/api/submit/login', function (req, res, next) {
       Submit.render('login', {
            package: 'submit'
        }, function (err, html) {
            //Rendering a view from the Package server/views
            res.send(html);
        });
    });

    app.get('/api/submit/example/auth', auth.requiresLogin, function (req, res, next) {
        res.send('Only authenticated users can access this');
    });

    app.get('/api/submit/generateReport', auth.requiresLogin, function (req, res, next) {
        res.send('Generating Report');
    });

    app.get('/api/submit/example/admin', auth.requiresAdmin, function (req, res, next) {
        res.send('Only users with Admin role can access this');
    });

    app.get('/api/submit/example/render', function (req, res, next) {
        Submit.render('login', {
            package: 'submit'
        }, function (err, html) {
            //Rendering a view from the Package server/views
            res.send(html);
        });
    });
};