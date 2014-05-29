// import { test , moduleFor } from 'kashikoi/tests/helpers/module-for';
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


asyncTest('asynchronous test:paper render', function(){
  expect(1);

   // var paper = find('a#paperContentLink');
    //var paperObject = find('#documentViewer');
    Ember.run(function(){
     // stop();
     // $('#documentViewer').on('onDocumentLoaded',function(e,eventInfo){
     //     //alert('stop');
     //     console.log('onDocumentLoaded');
     //     ok(true," flexpaper init");
     //     start();
     // });
      click("a#paperContentLink");
      
       $('#paperContentLink').on('click',function(e){
         
        ok(true, "clicked");
        start();
        // setTimeout(function(){
   //         ok(exists($('#documentViewer')));
   // 
   //       }, 3000);
        
      });
     
    });



    // click("a#paperContentLink");
    // andThen(function(){
    //    equal(find('#documentViewer').text(),'');
    // });

    //equal(find('#documentViewer').text(),'this is paper');

});

asyncTest('asynchronous test2:paper render', function(){
  expect(1);
  Ember.run(function(){

    click("a#paperContentLink");
    
     $('#paperContentLink').on('click',function(e){
       
      ok(true, "clicked");
      start();

    });
   
  });
});