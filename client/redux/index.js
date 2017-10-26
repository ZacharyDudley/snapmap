import { combineReducers } from 'redux'
import user from './userReducer'
import pic from './picReducer'
import message from './messageReducer'

export default combineReducers({ user, pic, message })
