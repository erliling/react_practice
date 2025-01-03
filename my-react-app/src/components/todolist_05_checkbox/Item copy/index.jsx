import React from 'react'
import './index.css'
import { useState } from 'react'
import PropTypes from 'prop-types'
import index from '../Hello'


export default function (props) {
    const {id, name, done, updateTodo} = props
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
    
  return (
    // #fff, not fff
    <li style={{backgroundColor:mouse?'#ddd':'#fff'}} onMouseEnter={handleMouse(true)} onMouseLeave={handleMouse(false)} key={id} >
        <label>
            <input type="checkbox" checked={done} onChange={handleCheck(id)}/>
            <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{display:mouse?'block':'none'}}>delete</button>
    </li>
  )
}

index.defaultProps = {
    name: 'erli'
}
