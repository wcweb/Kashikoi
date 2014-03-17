var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('component-test');
  this.route('helper-test');
  this.resource('posts', function() {
    this.route('index');
    this.route('list');
    this.route('new');
  });
  this.route('play-video');
  this.route('quiz');
});

export default Router;
