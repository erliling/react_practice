import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import News from './News'
import Message from './Message'
import MyNavLink from '../../../components/MyNavLink'

export default function index() {
  return (
    <div>
      <h3>this is home</h3>
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
        <Routes>
            <Route path='news' element={<News/>}/>
            <Route path='message/*' element={<Message/>}/>
            {/* <Route exact={false} path='/home/news' element={<News/>}></Route>
            <Route exact={false} path='/home/message' element={<Message/>}></Route> */}
            {/* <Route exact={false} path='/' element={<Navigate to="/home/news"/>}></Route> */}
        </Routes>
      </div>
    </div>
  )
}
