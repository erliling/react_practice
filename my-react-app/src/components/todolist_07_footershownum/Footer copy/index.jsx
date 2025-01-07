import React from 'react'
import './index.css'

export default function index(props) {
    const {todos} = props
    const total = todos.length
    const donenum = todos.reduce((pre, todo) => pre + (todo.done?1:0), 0)

  return (
    <div className='todo-footer'>
        <label >
            <input type="checkbox" />
            <span>done {donenum} / all {total}</span>
        </label>
        <button className='btn btn-danger'>delete all done tasks</button>
    </div>
  )
}
