import React from 'react'
import { useLocation, useMatch } from 'react-router-dom'

export default function index(props) {
    console.log(useLocation())
    // console.log(useMatch())
  return (
    <h3>this is about</h3>
  )
}
