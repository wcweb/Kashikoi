export default Ember.Route.extend({


  model: function() {

    //return posts;
    return this.store.find('post');
  }
});
