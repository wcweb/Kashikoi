//export default DS.FixtureAdapter.extend();


var ApplicationAdapter = DS.RESTAdapter.extend({
  namespace:'api',
  serializer: DS.RESTSerializer.extend({
    primaryKey:  '_id'
  })
});

export default ApplicationAdapter;
