
import {connect} from 'react-redux'

import CountUI from '../../../Count'
import {createIncrementAction, createDecrementAction, createAsyncIncrementAction} from '../../../../redux/count_action'

// const mapState2Props = state => ({count: state})

// const mapDispatch2Props = dispatch => (
//     {
//         jia:data => dispatch(createIncrementAction(data)),
//         jian:data => dispatch(createDecrementAction(data)),
//         asyncjia:(data, time) => dispatch(createAsyncIncrementAction(data, time))
//     }
// )

// export default connect(
//     state => ({count: state}),
//     dispatch => (
//         {
//             jia:data => dispatch(createIncrementAction(data)),
//             jian:data => dispatch(createDecrementAction(data)),
//             asyncjia:(data, time) => dispatch(createAsyncIncrementAction(data, time))
//         }
//     )
//     )(CountUI)
export default connect(
    state => ({count: state}),
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        asyncjia:createAsyncIncrementAction
    }
    )(CountUI)