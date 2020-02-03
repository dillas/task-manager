import { combineReducers } from 'redux'
import taskReducer from './task-reducer'
import appReducer from './app-reducer'

const reducers = combineReducers({
  tasks: taskReducer,
  app: appReducer
})

export default reducers
