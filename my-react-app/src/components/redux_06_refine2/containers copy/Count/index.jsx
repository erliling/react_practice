
import {connect} from 'react-redux'
import React, {useState, useRef} from 'react'

// import CountUI from '../../components/Count'
import {createIncrementAction, createDecrementAction, createAsyncIncrementAction} from '../../../../redux/count_action'

function Count(props) {

    // const [count, setCount] = useState(0)
    const selectRef = useRef(null)

    const handleAdd = () => {
        // console.log(props)
        // store.dispatch(createIncrementAction(selectRef.current.value*1))
        props.jia(selectRef.current.value*1)
    }
    const handleMinus = () => {
        // store.dispatch(createDecrementAction(selectRef.current.value*1))
        props.jian(selectRef.current.value*1)
    }
    const handleOdd = () => {
        const count = props.count
        if (count%2 !== 0) {
            // store.dispatch(createIncrementAction(selectRef.current.value*1))
            props.jia(selectRef.current.value*1)
        }
    }
    const handleAsync = () => {
        // store.dispatch(createAsyncIncrementAction(selectRef.current.value*1, 500))
        props.asyncjia(selectRef.current.value*1, 1000)
    }
  return (
    <div>
        <h1>current sum = {props.count}</h1>
        <select name="" id="" ref={selectRef}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select> &nbsp;
        <button onClick={handleAdd}>+</button> &nbsp;
        <button onClick={handleMinus}>-</button> &nbsp;
        <button onClick={handleOdd}>add if odd</button> &nbsp;
        <button onClick={handleAsync}>add async</button>
    </div>
  )
}


export default connect(
    state => ({count: state}),
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        asyncjia:createAsyncIncrementAction
    }
    )(Count)