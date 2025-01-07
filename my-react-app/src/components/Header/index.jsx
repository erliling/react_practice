// import React from 'react'
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'
import './index.css'

export default function index(props) {

    const {addTodo} = props
    const handleKeyUp = (event) => {
        const {keyCode, target} = event
        if (keyCode != 13) return
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

index.propTypes = {
    addTodo:PropTypes.func.isRequired
}