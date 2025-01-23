import React, {useState, useRef} from 'react'

export default function index() {

    const [count, setCount] = useState(0)
    const selectRef = useRef(null)

    const handleAdd = () => {
        // console.log(selectRef.current.value)
        setCount(count+selectRef.current.value*1)
    }
    const handleMinus = () => {
        setCount(count-selectRef.current.value*1)
        
    }
    const handleOdd = () => {
        if (count%2 !== 0) {
            setCount(count+selectRef.current.value*1)
            
        }
    }
    const handleAsync = () => {
        setTimeout (() => {
            setCount(count+selectRef.current.value*1)

        }, 500)
    }
  return (
    <div>
        <h1>current sum = {count}</h1>
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
