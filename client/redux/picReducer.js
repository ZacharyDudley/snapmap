import axios from 'axios'

//  --  ACTION TYPES  --  //
const GET_ALL_PICS  = 'GET_ALL_PICS'
const GET_PIC       = 'GET_PIC'
const ADD_PIC       = 'ADD_PIC'
const DELETE_PIC    = 'DELETE_PIC'

//  --  ACTION CREATORS --  //
const getAllPics  = pics => ({ type: GET_ALL_PICS, pics})
const getPic      = id => ({ type: GET_PIC, id})
const addPic      = pic => ({ type: ADD_PIC, pic})
const deletePic   = id => ({ type: DELETE_PIC, id})

//  --  REDUCER --  //
export default (pics = [], action) => {
  switch (action.type) {

    case GET_ALL_PICS:
      return [...pics]

    case GET_PIC:
    return pics.map(pic => {
      if (pic.id === action.id) {
        return pic
      }})

    case ADD_PIC:
      return [...pics, action.pic]

    case DELETE_PIC:
      return pics.filter(pic => {return pic.id !== action.id})

    default:
      return pics
  }
}

//  --  THUNKS  --  //
export const fetchPics = () => dispatch => {
  axios.get('/api/pictures')
    .then(res => dispatch(getAllPics(res.data)))
}

export const fetchPic = id => dispatch => {
  axios.get(`/api/pictures/${id}`)
    .then(res => dispatch(getPic(res.data)))
}

export const createPic = pic => dispatch => {
  axios.post('/api/pictures', pic)
    .then(res => dispatch(addPic(res.data)))
}

export const destroyPic = id => dispatch => {
  dispatch(deletePic(id))
  axios.delete(`/api/pictures/${id}`)
}
