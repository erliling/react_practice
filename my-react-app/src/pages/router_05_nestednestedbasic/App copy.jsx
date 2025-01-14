import { useState } from 'react'
import PubSub from 'pubsub-js'
import { BrowserRouter, Link, NavLink, Outlet, Route, Routes, Navigate} from 'react-router-dom'

import Home from '../Home'
import Home2 from '../Home2'
import About from '../About'
import MyNavLink from '../../components/MyNavLink'
import News from '../Home/News'
import Message from '../Home/Message'

import './App.css'
import { useEffect } from 'react'

function App() {
  // const [message, setMessage] = useState('')

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-xs-offset-2 col-xs-8'>
          <div className='page-header'><h2>React Router Demo</h2></div>
        </div>
      </div>
      <div className='row'>
        <div className="col-xs-2 col-xs-offset-2">
          <div className='list-group'>
            <MyNavLink to="/about">About</MyNavLink>
            <MyNavLink to="/home">Home</MyNavLink>
            {/* <NavLink className={({isActive})=>(isActive?'erli':"list-group-item")} to="/home">Home</NavLink> */}
          </div>
        </div>
        <div className='col-xs-6'>
          <div className='panel'>
            <div className='panel-body'>
              <Routes>
                <Route path='about' element={<About/>}></Route>
                <Route path='home/*' element={<Home/>}>
                  <Route path='news' element={<News/>}/>
                  <Route path='message' element={<Message/>}/>
                </Route>
                <Route path='/' element={<Navigate to="/about"/>}></Route>
                {/* <Route path='/' element={<Home2/>}></Route> */}
                {/* <Navigate to="/about"/> */}
                {/* <Route path='*' element={<App/>}></Route> */}
              </Routes>
              {/* <Outlet></Outlet> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
