const User = require('./user')
const Picture = require('./picture')
const Message = require('./message')

User.hasMany(Picture)
User.hasMany(Message)
Picture.belongsTo(User)
Message.belongsTo(User)

module.exports = {
  User,
  Picture,
  Message
}
