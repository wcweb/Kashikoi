export default Ember.Route.extend({
  //  renderTemplate: function() {
  //   var controller = this.controllerFor('posts.list');
  //   //console.log(controller);
  //   //this.render('posts/list',{outlet: 'posts',controller:controller});
  //   //var controller = this.controllerFor('Post');
  //   //console.log(controller);
  //   // Render the `favoritePost` template into
  //   // the outlet `posts`, and display the `favoritePost`
  //   // controller.
  //   // this.render('posts/list', {
  //   //   outlet: 'posts',
  //   //   controller: controller
  //   // });
    
  // },
  model: function() {

    //return posts;
    return ['red', 'yellow', 'blue'];
  }

});
