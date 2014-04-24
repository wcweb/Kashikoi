import { test , moduleFor } from 'appkit/tests/helpers/module-for';
var App;

moduleFor('route:index','Acceptances - play video', {
  setup: function(){
    App = startApp();
    visit('/play-video');
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});


asyncTest('asynchronous test:paper render', function(){
  expect(1);

   // var paper = find('a#paperContentLink');
    //var paperObject = find('#documentViewer');
    Ember.run(function(){
      //stop();
      click("a#paperContentLink");
       $('#paperContentLink').on('click',function(e){
        ok(true, "clicked");
        start();
      });
      //stop();
       //setTimeout(function(){
          //ok(exists($('#documentViewer')));
          ////start();
        //}, 3000);
      //stop();
      //$('#documentViewer').on('onDocumentLoaded',function(e,eventInfo){
          ////alert('stop');
          //ok(true," flexpaper init");
          //start();
      //});
     });



    // click("a#paperContentLink");
    // andThen(function(){
    //    equal(find('#documentViewer').text(),'');
    // });

    //equal(find('#documentViewer').text(),'this is paper');

});

