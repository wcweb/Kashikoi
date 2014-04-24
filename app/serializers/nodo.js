export default DS.RESTSerializer.extend({
    primaryKey:  '_id',
    serialize: function(record, opitons){
      console.log(record);
      return record;
    },

    normalizeHash: {
      video : function(hash){
        console.log('serializer: ',hash);
        hash.video = hash.videos[0].link;
        delete hash.videos;
        return hash;
      }
    },

});
