var attr = DS.attr,
	hasMany = DS.hasMany,
	belongsTo = DS.belongsTo;


var Quiz = DS.Model.extend({
	title: attr(),
	questions: hasMany('question'),
	user: attr(),
});

export default Quiz;
