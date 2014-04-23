var attr = DS.attr,
	hasMany = DS.hasMany,
	belongsTo = DS.belongsTo;

var Nodo = DS.Model.extend({
	title: attr(),
	comments: hasMany('comment', {async: true}),
	user: attr(),
  body: attr(),
});

export default Nodo;
