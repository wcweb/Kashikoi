var App;

module('Acceptances - Index', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

// test('index renders', function(){
//   expect(3);
//   visit('/').then(function(){
//     var title = find('h2#title');
//     equal(title.text(), 'App');
//   });
// });
test('index renders', function(){
  expect(1);

  visit('/').then(function(){
    var title = find('h2#title');
    //var list = find('ul li');

    equal(title.text(), '');

    //equal(list.length, 14);
    //equal(list.text(), 'redyellowblue');
  });
});


