import { todoAPI } from '../api'

import {closeModal} from './app-reducer'

const GET_TASK = 'GET_TASK'
const CREATE_TASK = 'CREATE_TASK'
const DELETE_TASK = 'DELETE_TASK'
const CHANGE_NEW_TACK_FIELD = 'CHANGE_NEW_TACK_FIELD'

const initialState = {
  isFetching: true,
  hasError: false,
  items: [],
  newTaskName: '',
  editableTask: {}
};

const taskReducer = function(state = initialState, action) {
  switch(action.type) {

    case GET_TASK:
      return { ...state, items: action.response.data.data}

    case CREATE_TASK:
      return { ...state }

    case DELETE_TASK:
      return { ...state }

    case CHANGE_NEW_TACK_FIELD:
      return { ...state, newTaskName: action.newTaskName }

    default:
      return state
  }
}

export const getTasks = () => (dispatch) => {
  todoAPI.getAll()
  .then((response) => dispatch({
    type: GET_TASK,
    response
  }))
}

export const deleteTask = (id) => (dispatch) => {
  todoAPI.delete(id)
  .then((response) => dispatch({
    type: DELETE_TASK,
    response }))
  .then(() => {
    dispatch(getTasks())
  })
}

export const changeNewTaskField = (newTaskName) => {
  return {
    type: CHANGE_NEW_TACK_FIELD,
    newTaskName
  }
}

export const createTask = (title) => (dispatch) => {
  todoAPI.create(title)
  .then((response) => dispatch({
    type: CREATE_TASK,
    payload: response }))
  .then(() => {
    dispatch(getTasks())
    dispatch(closeModal())
    dispatch(changeNewTaskField(''))
  })
}

export default taskReducer;
