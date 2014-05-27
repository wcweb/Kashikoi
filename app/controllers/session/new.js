/* global App */
export default  Ember.Controller.extend({
  login: function(){
    var self = this;
    var data = this.getProperties('loginOrEmail', 'password');
    
    if (!Ember.isEmpty(data.loginOrEmail) && !Ember.isEmpty(data.password)) {
          var postData = { session: { login_or_email: data.loginOrEmail, password: data.password } };
          Ember.ajax({type:'POST',url:'http://127.0.0.1:3000/oauth/token', headers:{"Authorization":'Basic YWJjMTIzOnNzaC1zZWNyZXQ='},data: 'grant_type=password&username=bob&password=secret&scope=offline_access',dataType:'json'}).then(function(response) {
            var sessionData = (response.session || {})
            App.Session.setProperties({
              authToken:     response.access_token,
              authAccountId: sessionData.account_id
            });
            var attemptedTransition = App.Session.get('attemptedTransition');
            if (attemptedTransition) {
              attemptedTransition.retry();
              App.Session.set('attemptedTransition', null);
            } else {
              self.transitionToRoute('users/index');
            }
          });
        }

  }
});

