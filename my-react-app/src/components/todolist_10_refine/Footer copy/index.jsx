// import React from 'react'
import './index.css'

export default function index(props) {
    const {todos, updateTodoCheckall, deleteDoneTodo} = props
    const total = todos.length
    const donenum = todos.reduce((pre, todo) => pre + (todo.done?1:0), 0)

    const handleCheckAll = ()=> {
        return (event) => {
            updateTodoCheckall(event.target.checked)
        }
    }

    const handleClickDeleteDone = ()=> {
        return () => {
            deleteDoneTodo()
        }
    }

  return (
    <div className='todo-footer'>
        <label >
            <input type="checkbox" onChange={handleCheckAll()} checked={(donenum === total)&(total!=0)?true:false}/>
            <span>done {donenum} / all {total}</span>
        </label>
        <button className='btn btn-danger' onClick={handleClickDeleteDone()}>delete all done tasks</button>
    </div>
  )
}
