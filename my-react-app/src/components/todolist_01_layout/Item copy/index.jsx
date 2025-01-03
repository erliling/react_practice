import React from 'react'
import './index.css'

export default function () {
  return (
    <li>
        <label>
            <input type="checkbox" />
            <span>erli</span>
        </label>
        <button className="btn btn-danger">delete</button>
    </li>
  )
}
