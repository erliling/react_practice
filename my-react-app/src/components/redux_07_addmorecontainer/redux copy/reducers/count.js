import { INCREMENT, DECREMENT } from '../constant'

// const initState = 0
export default function countReducer(preState, action) {
    const {type, data} = action
    switch (type) {
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
        default:
            return 0
    }
}