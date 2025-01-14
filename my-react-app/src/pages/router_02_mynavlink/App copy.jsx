import { useState } from 'react'
import PubSub from 'pubsub-js'
import { BrowserRouter, Link, NavLink, Outlet, Route, Routes} from 'react-router-dom'

import Home from '../Home'
import About from '../About'
import MyNavLink from '../../components/MyNavLink'

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
            <MyNavLink to="/atguigu/about">About</MyNavLink>
            <MyNavLink to="/atguigu/home">Home</MyNavLink>
            {/* <NavLink className={({isActive})=>(isActive?'erli':"list-group-item")} to="/home">Home</NavLink> */}
          </div>
        </div>
        <div className='col-xs-6'>
          <div className='panel'>
            <div className='panel-body'>
              <Routes>
                <Route path='/atguigu/about' element={<About/>}></Route>
                <Route path='/atguigu/home' element={<Home/>}></Route>
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
