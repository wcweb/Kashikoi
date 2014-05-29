// import { test , moduleFor } from 'kashikoi/tests/helpers/module-for';
var App;

module('Acceptances - session', {
  setup: function(){
    App = startApp();
    sinon.spy(jQuery, "ajax");
    visit('/session/new');
    
  },
  teardown: function() {
    Ember.run(App, 'destroy');
    jQuery.ajax.restore();
  }
});


asyncTest('asynchronous test:session get', function(){
  expect(5);


    Ember.run(function(){
      equal($('#button_2').length, 1);
      click("#button_2");
      click("#button_1");
      
      
      $('#button_1').on('click',function(e){
        ok(true,  $("#protectedEndPointData").html());
        
        equal("http://localhost:1234/api/userinfo", jQuery.ajax.getCall(1).args[0].url);
        start();
      });
      
      
      
       $('#button_2').on('click',function(e){
         
        ok(true, $("#refresh_token").html());
        
        
        equal("http://localhost:1234/oauth/token", jQuery.ajax.getCall(0).args[0].url);
      });
     
    });




});

