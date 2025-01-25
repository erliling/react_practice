
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {thunk} from 'redux-thunk'
import {composeWithDevTools} from '@redux-devtools/extension'

import reducer from './reducers'

// export default configureStore({
//     reducer: {count, countReducer},
// })

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))