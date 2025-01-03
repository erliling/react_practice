import React from 'react'
import './index.css'

export default function index() {
  return (
    <div className='todo-footer'>
        <label >
            <input type="checkbox" />
            <span>done 0/ all 4</span>
        </label>
        <button className='btn btn-danger'>delete all done tasks</button>
    </div>
  )
}
