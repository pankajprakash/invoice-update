import {combineReducers } from 'redux'
import {getReducer} from './reducers/getReducer'

export const rootReducer = combineReducers({
   dateData : getReducer
})

export default rootReducer;