import React from 'react'
import C from '../C'

export default function index(props) {
    // const {value, setValue} = useContext(myContext)

  return (
    <div className='child'>
        <h3>I'm component B</h3>
        <h4>username from A is: {props.name1}</h4>

        <C/>
    </div>
  )
}
