import { combineReducers } from '@reduxjs/toolkit'
import auth from '../features/authSlice'

const reducers = combineReducers({ auth })

export default reducers