import { combineReducers } from '@reduxjs/toolkit'
import auth from '../features/authSlice'
import loggedInUser from '../features/loggedInUser'

const reducers = combineReducers({ auth, loggedInUser })

export default reducers