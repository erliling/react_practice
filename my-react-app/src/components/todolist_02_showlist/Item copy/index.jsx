import React from 'react'
import './index.css'

export default function (props) {
    const {id, name, done} = props
  return (
    <li>
        <label>
            <input type="checkbox" checked={done} key={id}/>
            <span>{name}</span>
        </label>
        <button className="btn btn-danger">delete</button>
    </li>
  )
}
