'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module,
    favicon = require('serve-favicon');

var Submit = new Module('submit');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Submit.register(function(app, auth, database) {

    //app.set('views', __dirname + '/server/views');


    //We enable routing. By default the Package Object is passed to the routes
    Submit.routes(app, auth, database);

    //We are adding a link to the main menu for all authenticated users
    Submit.menus.add({
        title: 'Submit Page',
        link: 'submit example page',
        roles: ['all'],
        menu: 'main'
    }).add({
        title: 'Submit Landing',
        link: 'submit landing',
        roles: ['all'],
        menu: 'main'
    });

    Submit.aggregateAsset('css', 'submit.css');
    app.use(favicon(__dirname + '/public/assets/img/favicon.ico'));

    /**
      //Uncomment to use. Requires meanio@0.3.7 or above
      // Save settings with callback
      // Use this for saving data from administration pages
      Submit.settings({
          'someSetting': 'some value'
      }, function(err, settings) {
          //you now have the settings object
      });

      // Another save settings example this time with no callback
      // This writes over the last settings.
      Submit.settings({
          'anotherSettings': 'some value'
      });

      // Get settings. Retrieves latest saved settigns
      Submit.settings(function(err, settings) {
          //you now have the settings object
      });
      */

    return Submit;
});
