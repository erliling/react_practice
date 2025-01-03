import React from 'react'
import './index.css'
import { useState } from 'react'

export default function (props) {
    const {id, name, done} = props
    const [mouse, setMouse] = useState(false)

    const handleMouse = (flag) => {
        return () => {
            // setMouse({mouse:flag}) //wrong
            setMouse(flag)
            // console.log(flag)
        }
    }
    
  return (
    // #fff, not fff
    <li style={{backgroundColor:mouse?'#ddd':'#fff'}} onMouseEnter={handleMouse(true)} onMouseLeave={handleMouse(false)} key={id} >
        <label>
            <input type="checkbox" checked={done} />
            <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{display:mouse?'block':'none'}}>delete</button>
    </li>
  )
}
