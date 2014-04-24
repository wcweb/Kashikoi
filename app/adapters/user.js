var UserAdapter =  DS.RESTAdapter.extend({
  namespace:'api'
  //serializer: DS.RESTSerializer.extend({
    //primaryKey:  '_id'
  //})
});

export default UserAdapter;
