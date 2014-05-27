import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

import ajax from 'ic-ajax';

Ember.ajax = ajax;

// @TODO determi this is a app or just a course in a app.
// get course id





var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION:    true,
  LOG_MODULE_RESOLVER:      true,
  LOG_TRANSITIONS:          true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS:         true,
  modulePrefix: 'kashikoi', // TODO: loaded via config
  Resolver: Resolver
});
//Ember={
  //imports: {
    //console: window.console
  //}
//};
Ember.RSVP.configure('onerror', function(error) {
  Ember.Logger.assert(false, error);
});
Ember.LinkView.reopen({
  attributeBindings: ['data-toggle']
});

Ember.TextField.reopen({
  attributeBindings: ['data-toggle', 'data-placement']
});

import debug from './helpers/debug';
debug(Ember);

Ember.Handlebars.registerHelper("echo",function(value) {
    return value;
});






loadInitializers(App, 'kashikoi');




export default App;
