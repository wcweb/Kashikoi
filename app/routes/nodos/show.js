export default Ember.Route.extend({

  model: function(params) {
    return this.store.find('nodo', params.nodo_id);
  }
});
