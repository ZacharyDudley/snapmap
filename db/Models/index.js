const User = require('./User')
const Picture = require('./Picture')

User.hasMany(Picture)
Picture.belongsTo(User)

module.exports = {
  User,
  Picture
}
