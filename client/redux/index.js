import { combineReducers } from 'redux'
import user from './userReducer'
import pic from './picReducer'

export default combineReducers({ user, pic })
