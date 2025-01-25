
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {thunk} from 'redux-thunk'

import reducer from './reducers'

// export default configureStore({
//     reducer: {count, countReducer},
// })

export default createStore(reducer, applyMiddleware(thunk))