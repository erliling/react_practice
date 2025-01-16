import React from 'react'
import { NavLink } from 'react-router-dom'

export default function index(props) {
    // console.log(props)
    const {title} = props
    
  return (
    <NavLink className={({isActive})=>(isActive?'erli':"list-group-item")} {...props}>{props.children}</NavLink>
  )
}
