import React, {useState} from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'

import Detail from './Detail'

export default function index() {
    const [messageArr, setMessageArr] = useState([
        {id:'01', title:'message1'},
        {id:'02', title:'message2'},
        {id:'03', title:'message3'},
    ])

    const navigate = useNavigate()
    const handleReplace = (id, title, flag)=> {
        return () => {
            // navigate(`/home/message/detail/${id}/${title}`, {replace: flag})
            // navigate(`/home/message/detail?id=${id}&title=${title}`, {replace: flag})
            navigate(`/home/message/detail`, {state: {id:id, title: title}, replace: flag})
        }
    }
  return (
    <div>
        <ul>
            {
                messageArr.map((msgObj) => {
                    return (
                        <li key={msgObj.id}>
                            {/* <a href='/xxx'>{msgObj.title}</a> */}
                            {/* <Link to='/home/message/detail'>{msgObj.title}</Link> */}

                            {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}
                            {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}
                            <Link to='/home/message/detail/' state={{id:msgObj.id, title:msgObj.title}}>{msgObj.title}</Link>
                            &nbsp;<button onClick={handleReplace(msgObj.id, msgObj.title, false)}>push</button>
                            &nbsp;<button onClick={handleReplace(msgObj.id, msgObj.title, true)}>replace</button>
                        </li>
                    )
                })
            }
        </ul>
        <hr />
        <Routes>
            {/* <Route path='detail/:id/:title' element={<Detail/>}/>  */}
            <Route path='detail' element={<Detail/>}/> 
        </Routes>
    </div>
  )
}
