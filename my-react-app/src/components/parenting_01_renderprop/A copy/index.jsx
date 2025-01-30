import React, {useState} from 'react'
import B from '../../B'
import {myContext} from '../../../context'


export default function index(props) {
    const [name, setName] = useState('tom')
    

  return (
    <div className='parent'>
        <h3>I'm  component A</h3>
        <h4>my username is: {name}</h4>
        <myContext.Provider value={{name, }}>
            {props.erli(name)}
        </myContext.Provider>
    </div>
  )
}
