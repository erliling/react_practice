import { useState } from 'react'
import PubSub from 'pubsub-js'
import { BrowserRouter, Link, Outlet, Route, Routes} from 'react-router-dom'

import Home from '../Home'
import About from '../About'

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
            <Link className="list-group-item" to="/about">About</Link>
            <Link className="list-group-item" to="/home">Home</Link>
          </div>
        </div>
        <div className='col-xs-6'>
          <div className='panel'>
            <div className='panel-body'>
              <Routes>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/home' element={<Home/>}></Route>
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
