
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {thunk} from 'redux-thunk'

import countReducer from './reducers/count'
import personReducer from './reducers/person'

const allReducers = combineReducers({
    he: countReducer,
    ren: personReducer
})

// export default configureStore({
//     reducer: {count, countReducer},
// })

export default createStore(allReducers, applyMiddleware(thunk))