// import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'
import index from '../Hello'
import './index.css'


export default function (props) {
    const {id, name, done, updateTodo, deleteTodo} = props
    const [mouse, setMouse] = useState(false)

    const handleMouse = (flag) => {
        return () => {
            // setMouse({mouse:flag}) //wrong
            setMouse(flag)
            // console.log(flag)
        }
    }

    const handleCheck = (id) => {
        return (event) => {
            updateTodo(id, event.target.checked)
        }
    }

    const handleDelete = (id) => {

        return () => {
            if (window.confirm("are you sure to delete?")) {
                deleteTodo(id)
            }
        }
    }
    
  return (
    // #fff, not fff
    <li style={{backgroundColor:mouse?'#ddd':'#fff'}} onMouseEnter={handleMouse(true)} onMouseLeave={handleMouse(false)} key={id} >
        <label>
            <input type="checkbox" checked={done} onChange={handleCheck(id)}/>
            <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{display:mouse?'block':'none'}} onClick={handleDelete(id)}>delete</button>
    </li>
  )
}

index.defaultProps = {
    name: 'erli'
}
