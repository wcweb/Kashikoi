var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('component-test');
  this.route('helper-test');
  this.route('search');
  this.resource('nodos', function() {
    this.route('index');
    this.route('list');
    this.route('new');
    this.route('show', { path: ':nodo_id' });
  });
  this.resource('users', function(){
    this.route('index');
    this.route('list');
    this.route('show', { path: ':user_id' });
  });
  this.route('play-video');
  this.route('quiz');
  
  this.resource('session', function(){
    this.route('new');
    this.route('destroy');
  });
});

export default Router;
