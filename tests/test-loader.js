// TODO: load based on params


// console.dir(requirejs._eak_seen);
// Ember.keys(requirejs._eak_seen).filter(function(key) {
//   return (/\-test/).test(key);
// }).forEach(function(moduleName) {
//   console.log(moduleName);
//   require(moduleName, null, null, true);
// });


// TODO: load based on params
Ember.keys(requirejs.entries).forEach(function(entry) {
  if ((/\-test/).test(entry)) {
    require(entry, null, null, true);
  }
});