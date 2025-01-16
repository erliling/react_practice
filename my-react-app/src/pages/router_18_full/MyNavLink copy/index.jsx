import React from 'react'
import { NavLink } from 'react-router-dom'

export default function index(props) {
    // console.log(props)
    const {title} = props
    const computedClassName = ({isActive}) => {
      return isActive ? 'erli' : 'list-group-item'
    }
  return (
    // <NavLink className={({isActive})=>(isActive?'erli':"list-group-item")} {...props}>{props.children}</NavLink>
    <NavLink className={computedClassName} {...props}>{props.children}</NavLink>
  )
}
