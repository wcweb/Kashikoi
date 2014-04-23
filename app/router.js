var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('component-test');
  this.route('helper-test');
  this.route('search');
  this.resource('nodos', function() {
    this.route('index');
    this.route('list');
    this.route('new');
  });
  this.resource('users', function(){
    this.route('index');
  });
  this.route('play-video');
  this.route('quiz');
});

export default Router;
