import React, {useState} from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import Detail from './Detail'

export default function index() {
    const [messageArr, setMessageArr] = useState([
        {id:'01', title:'message1'},
        {id:'02', title:'message2'},
        {id:'03', title:'message3'},
    ])
  return (
    <div>
        <ul>
            {
                messageArr.map((msgObj) => {
                    return (
                        <li key={msgObj.id}>
                            {/* <a href='/xxx'>{msgObj.title}</a> */}
                            <Link to='/home/message/detail'>{msgObj.title}</Link>
                        </li>
                    )
                })
            }
        </ul>
        <hr />
        <Routes>
            <Route path='detail' element={<Detail/>}/> 
        </Routes>
    </div>
  )
}
