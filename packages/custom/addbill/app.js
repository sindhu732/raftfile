'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Addbill = new Module('addbill');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Addbill.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Addbill.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Addbill.menus.add({
    title: 'addbill example page',
    link: 'addbill example page',
    roles: ['all'],
    menu: 'main'
  });
  
  Addbill.aggregateAsset('css', 'addbill.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Addbill.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Addbill.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Addbill.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Addbill;
});
