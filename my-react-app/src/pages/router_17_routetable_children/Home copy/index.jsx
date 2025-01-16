import React, {useState} from 'react'
import { Routes, Route, Navigate, useNavigate, Outlet } from 'react-router-dom'

import News from './News'
import Message from './Message'
import MyNavLink from '../../../components/MyNavLink'

export default function index() {
  const [sum, setSum] = useState(0)
  const navigate = useNavigate()
  const handleAddOne = () => {
    setSum(sum+1)
    if (sum === 2) {
      navigate('/about', {replace: true})
    }
  }
  
  return (
    <div>
      <h3>this is home</h3>
      <div>
        <h4>sum is: {sum}</h4>
        <button onClick={handleAddOne}>click me add 1</button>
      </div>
      <div>
        <ul className='nav nav-tabs'>
          <li>
            {/* <a className='list-group-item' href='./home-news.html'>News</a>
            <a className='list-group-item active' href='./home-message.html'>Message</a> */}
            <MyNavLink to='/home/news'>News</MyNavLink>
          </li>
          <li>
            <MyNavLink to='/home/message'>Message</MyNavLink>
          </li>
        </ul>
        {/* <Routes>
            <Route path='news' element={<News/>}/>
            <Route path='message/*' element={<Message/>}/> */}
            {/* <Route exact={false} path='/home/news' element={<News/>}></Route>
            <Route exact={false} path='/home/message' element={<Message/>}></Route> */}
            {/* <Route exact={false} path='/' element={<Navigate to="/home/news"/>}></Route> */}
        {/* </Routes> */}

        <Outlet></Outlet>
      </div>
    </div>
  )
}
