import React, { useContext } from 'react'
import {myContext} from '../../../context'


export default function index() {
    // const context = myContext
    
    const {name} = useContext(myContext)
    // console.log(myContext)
  return (
    <div className='grand'>
        <h3>I'm component C</h3>
        <h4>name from component A: {name}</h4>
    </div>
  )
}
