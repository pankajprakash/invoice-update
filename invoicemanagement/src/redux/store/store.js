import { createStore} from 'redux'
// import { countReducer } from './../reducers/userReducer'
// import { apiReducer } from './../reducers/apiReducer'
import {rootReducer} from './../rootReducer'

import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore( rootReducer ,composeWithDevTools() ) 


export default store