const User = require('./user')
const Picture = require('./picture')

User.hasMany(Picture)
Picture.belongsTo(User)

module.exports = {
  User,
  Picture
}
