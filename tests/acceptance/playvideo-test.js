var App;

module('Acceptances - play video', {
  setup: function(){
    App = startApp();
    visit('/play-video');
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

asyncTest('asynchronous test:paper render', function(){
  
  expect(3);

   // var paper = find('a#paperContentLink');
    //var paperObject = find('#documentViewer');
    
    
   
   
    Ember.run(function(){
      stop();
      click("a#paperContentLink");
       $('#paperContentLink').on('click',function(e){
        ok(true, "clicked");
        start();
      });
   
   
   
      stop();
       setTimeout(function(){
          ok(exists($('#documentViewer')));
          start();
        }, 3000);
   
      //stop();
      $('#documentViewer').on('onDocumentLoaded',function(e,eventInfo){
          //alert('stop');
          ok(true," flexpaper init");
          start();
      });
     });



    // click("a#paperContentLink");
    // andThen(function(){
    //    equal(find('#documentViewer').text(),'');
    // });

    //equal(find('#documentViewer').text(),'this is paper');
      

});

