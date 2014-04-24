var attr = DS.attr,
	hasMany = DS.hasMany,
	belongsTo = DS.belongsTo;

var User = DS.Model.extend({
	name: attr(),
	email: attr(),
  username: attr(),
  role: attr()
});

export default User;
