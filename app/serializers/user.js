var UserSerializer = DS.RESTSerializer.extend({
    primaryKey:  '_id'
  //normalizeHash: {
    //_id : function(hash){
      //console.log(hash);
      //hash.id = hash._id;
      //delete hash._id;
      //return hash;
    //}
  //},
  //extractArray: function(store, type, payload){
    //console.dir('payload: ',payload);
    //return payload.map(function(json){
      //return this.extractSingle(json);
    //}, this);
  //}
});

export default UserSerializer;
