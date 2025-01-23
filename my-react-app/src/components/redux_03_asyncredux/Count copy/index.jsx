import React, {useState, useRef} from 'react'

import store from '../../../redux/store'
import { createIncrementAction, createDecrementAction, createAsyncIncrementAction } from '../../../redux/count_action'

export default function index() {

    // const [count, setCount] = useState(0)
    const selectRef = useRef(null)

    const handleAdd = () => {
        // console.log(selectRef.current.value)
        // setCount(count+selectRef.current.value*1)
        // store.dispatch({type:'increment', data: selectRef.current.value*1})
        store.dispatch(createIncrementAction(selectRef.current.value*1))
    }
    const handleMinus = () => {
        // setCount(count-selectRef.current.value*1)
        store.dispatch(createDecrementAction(selectRef.current.value*1))
    }
    const handleOdd = () => {
        const count = store.getState()
        if (count%2 !== 0) {
            store.dispatch(createIncrementAction(selectRef.current.value*1))
        }
    }
    const handleAsync = () => {
        // setTimeout (() => {
        //     store.dispatch(createIncrementAction(selectRef.current.value*1))
        // }, 500)
        store.dispatch(createAsyncIncrementAction(selectRef.current.value*1, 500))
    }
  return (
    <div>
        <h1>current sum = {store.getState()}</h1>
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
