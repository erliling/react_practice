import React from 'react'
import './index.css'
import {nanoid} from 'nanoid'

export default function index(props) {
    const {addTodo} = props
    const handleKeyUp = (event) => {
        const {keyCode, target} = event
        if (event.keyCode != 13) return
        const todoItem = {id: nanoid(), name: target.value, done: false}
        addTodo(todoItem)
        target.value = ''
    }
    
  return (
    <div className='todo-header'>
        <input type="text" placeholder='please type enter' onKeyUp={handleKeyUp}/>
    </div>
  )
}
