var attr = DS.attr,
	hasMany = DS.hasMany,
	belongsTo = DS.belongsTo;
	
var Comment = DS.Model.extend({
	body:attr()
});

export default Comment;