var attr = DS.attr,
	hasMany = DS.hasMany,
	belongsTo = DS.belongsTo;
	
var Post = DS.Model.extend({
	title: attr(),
	comments: hasMany('comment'),
	user: attr(),
});

export default Post;