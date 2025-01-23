
import {createStore} from 'redux'
import countReducer from './count_reducer'

// export default configureStore({
//     reducer: {count, countReducer},
// })

export default createStore(countReducer)