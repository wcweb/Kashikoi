var ApplicationController = Ember.Controller.extend({

	// tabsMeta: [
 //    Ember.Object.create({title: '首页', linkTo: 'index'}),
 //    Ember.Object.create({title: 'Post', linkTo: 'posts.new'}),
 //    Ember.Object.create({title: 'Play', linkTo: 'play-video'})
 //  ]
    search: '',
    content: ['Home', 'Profile', 'Messages'],
    actions: {
      query: function() {
        // the current value of the text field
        var query = this.get('search');
        this.transitionToRoute('search', { query: query });
      }
    }
});

export default ApplicationController;
