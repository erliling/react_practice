
import {connect} from 'react-redux'

import CountUI from '../../components/Count'
import {createIncrementAction, createDecrementAction, createAsyncIncrementAction} from '../../../../redux/count_action'
// import store from '../../redux/store'

// function mapState2Props(state) {
//     // return {count: store.getState()}
//     return {count: state}
// }
const mapState2Props = state => ({count: state})

// function mapDispatch2Props(dispatch) {
//     // return {jia:()=>{console.log(1)}}
//     return {
//         // jia:(data)=>{
//         //     dispatch(createIncrementAction(data))
//         // }
//         jia:data => dispatch(createIncrementAction(data)),
//         jian:data => dispatch(createDecrementAction(data)),
//         asyncjia:(data, time) => dispatch(createAsyncIncrementAction(data, time))
//     }
// }
const mapDispatch2Props = dispatch => (
    {
        jia:data => dispatch(createIncrementAction(data)),
        jian:data => dispatch(createDecrementAction(data)),
        asyncjia:(data, time) => dispatch(createAsyncIncrementAction(data, time))
    }
)

export default connect(mapState2Props, mapDispatch2Props)(CountUI)