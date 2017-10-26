import axios from 'axios'

//  --  INITIAL STATE --  //
const initial = {
  users: [],
  userLocation: []
}

//  --  ACTION TYPES  --  //
const GET_ALL_USERS  = 'GET_ALL_USERS'
const GET_USER       = 'GET_USER'
const ADD_USER       = 'ADD_USER'
const DELETE_USER    = 'DELETE_USER'

//  --  ACTION CREATORS --  //
const getAllUsers  = users => ({ type: GET_ALL_USERS, users})
const getUser      = id => ({ type: GET_USER, id})
const addUser      = user => ({ type: ADD_USER, user})
const deleteUser   = id => ({ type: DELETE_USER, id})

//  --  REDUCER --  //
export default (state = initial, action) => {
  switch (action.type) {

    case GET_ALL_USERS:
      return [...action.users]

    case GET_USER:
      return state.users.map(user => {
        if (user.id === action.id) {
          return user
        }})

    case ADD_USER:
      return [...state.users, action.user]

    case DELETE_USER:
      return state.users.filter(user => {return user.id !== +action.id})

    default:
      return state
  }
}

//  --  THUNKS  --  //
export const fetchUsers = () => dispatch => {
  axios.get('/api/users')
    .then(res => dispatch(getAllUsers(res.data)))
}

export const fetchUser = id => dispatch => {
  axios.get(`/api/users/${id}`)
    .then(res => dispatch(getUser(res.data)))
}

export const createUser = user => dispatch => {
  axios.post('/api/users', user)
    .then(res => dispatch(addUser(res.data)))
}

export const destroyUser = id => dispatch => {
  dispatch(deleteUser(id))
  axios.delete(`/api/users/${id}`)
}
