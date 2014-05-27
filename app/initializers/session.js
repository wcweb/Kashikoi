export default {
  name: "session",
  // after: "store",
  
  initialize: function(container, application) {
    // session = Session.create();
    // application.register('session:main', session, {  instantiate: false, singleton: true });
    // 
    // container.typeInjection('controller', 'session', 'session:main');
    // container.typeInjection('route', 'session', 'session:main');
    // container.typeInjection('component', 'session', 'session:main');
    
    // here application?
    application.Session = Ember.Object.extend({
      init: function(){
        this._super();
        this.set('authToken', $.cookie('auth_token'));
        this.set('authAccountId', $.cookie('auth_accout'));
      },
      
      authTokenChanged: function(){
        $.cookie('auth_token', this.get('authToken'));
        
      }.observes('authToken'),
      
      authAccountIdChanged: function(){
        var authAccountId = this.get('authAccountId');
        $.cookie('auth_account', authAccountId);
        if(!Ember.isEmpty(authAccountId)){
          this.set('authAccount', application.Account.find(authAccountId));
        }
      }.observes('authAccountId')
      
    }).create();
    
    
    
  }
};

Ember.$.ajaxPrefilter(function(options, originalOptions, jqXHR) {
  if (!jqXHR.crossDomain) {
    jqXHR.setRequestHeader('X-AUTHENTICATION-TOKEN', App.Session.get('authToken'));
  }
});