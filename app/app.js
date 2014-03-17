import Resolver from 'ember/resolver';


var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'appkit', // TODO: loaded via config
  Resolver: Resolver['default']
});
Ember.RSVP.configure('onerror', function(error) {
  Ember.Logger.assert(false, error);
});
Ember.LinkView.reopen({
  attributeBindings: ['data-toggle']
});

Ember.TextField.reopen({
  attributeBindings: ['data-toggle', 'data-placement']
});

// Ember.Handlebars.registerHelper("debug",function(optionalValue) {
//     console.log("Current Context");
//     console.log("====================");
//     console.log(this);
//  
//     if (optionalValue) {
//       console.log("Value");
//       console.log("====================");
//       console.log(optionalValue);
//     }
// });

Ember.Handlebars.registerHelper("echo",function(value) {
    console.log(value);
    return value;
});


import debug from './helpers/debug';
debug(Ember);

export default App;
