import axios from 'axios'

//  --  ACTION TYPES  --  //
const GET_ALL_MESSAGES  = 'GET_ALL_MESSAGES'
const GET_MESSAGE       = 'GET_MESSAGE'
const ADD_MESSAGE       = 'ADD_MESSAGE'
const DELETE_MESSAGE    = 'DELETE_MESSAGE'

//  --  ACTION CREATORS --  //
const getAllMessages  = messages => ({ type: GET_ALL_MESSAGES, messages})
const getMessage      = id => ({ type: GET_MESSAGE, id})
const addMessage      = message => ({ type: ADD_MESSAGE, message})
const deleteMessage   = id => ({ type: DELETE_MESSAGE, id})

//  --  REDUCER --  //
export default (messages = [], action) => {
  switch (action.type) {

    case GET_ALL_MESSAGES:
      return [...action.messages]

    case GET_MESSAGE:
    return messages.map(message => {
      if (message.id === action.id) {
        return message
      }})

    case ADD_MESSAGE:
      return [...messages, action.message]

    case DELETE_MESSAGE:
      return messages.filter(message => {return message.id !== action.id})

    default:
      return messages
  }
}

//  --  THUNKS  --  //
export const fetchMessages = () => dispatch => {
  axios.get('/api/messages')
    .then(res => dispatch(getAllMessages(res.data)))
}

export const fetchMessage = id => dispatch => {
  axios.get(`/api/messages/${id}`)
    .then(res => dispatch(getMessage(res.data)))
}

export const createMessage = message => dispatch => {
  console.log('MESSAGE', message)
  axios.post('/api/messages', message)
    .then(res => dispatch(addMessage(res.data)))
}

export const destroyMessage = id => dispatch => {
  dispatch(deleteMessage(id))
  axios.delete(`/api/messages/${id}`)
}
