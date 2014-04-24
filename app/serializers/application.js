var ApplicationSerializer= DS.RESTSerializer.extend({
  normalizeHash: {
    _id : function(hash){
      console.log(hash);
      hash.id = hash._id;
      delete hash._id;
      return hash;
    }
  },
});

export default ApplicationSerializer;
