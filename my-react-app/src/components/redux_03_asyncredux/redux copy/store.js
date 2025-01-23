
import {createStore, applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'

import countReducer from './count_reducer'


// export default configureStore({
//     reducer: {count, countReducer},
// })

export default createStore(countReducer, applyMiddleware(thunk))