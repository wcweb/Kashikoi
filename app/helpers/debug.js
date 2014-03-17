// Please note that Handlebars helpers will only be found automatically by the
// resolver if their name contains a dash (debug, optionalValue etc.)
// For more details: http://stefanpenner.github.io/ember-app-kit/guides/using-modules.html

var debug= function(ember){
	Ember.Handlebars.registerHelper("debug",function(optionalValue) {
      console.log("Current Context");
      console.log("====================");
      console.log(this);
 
      if (optionalValue) {
        console.log("Value");
        console.log("====================");
        console.log(optionalValue);
      }
    });
};

export default debug;