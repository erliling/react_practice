import { useState, lazy, Suspense } from 'react'
import PubSub from 'pubsub-js'
import { BrowserRouter, Link, NavLink, Outlet, Route, Routes, Navigate, useRoutes } from 'react-router-dom'

// import Home from './pages/Home'
// import Home2 from './Home2'
// import About from './pages/About'
import MyNavLink from '../MyNavLink'
import News from '../../pages/Home/News'
import Message from '../../pages/Home/Message'
// import Header from '../../components/Header'
import Detail from '../../pages/Home/Message/Detail'
import Loading from '../Loading'

// import routes from './routes'

import './App.css'
import { useEffect } from 'react'

const Home = lazy(()=>import('../../pages/Home'))
const About = lazy(()=>import('../../pages/About'))

function App() {
  // const [message, setMessage] = useState('')
  const routeTable = useRoutes([
    {
      path: 'about',
      element: <About/>
    },
    {
      path: 'home/*',
      element: <Home/>,
      children: [
        {
          path: 'news',
          element: <News/>
        },
        {
          path: 'message/*',
          element: <Message/>,
          children: [
            {
              path: 'detail',
              element: <Detail/>
            }
          ]
        },
      ]
    },
    {
      path: '',
      element: <Navigate to='/about' />
    },
  ])

  // const routeTable2 = useRoutes(routes)

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-xs-offset-2 col-xs-8'>
          {/* <div className='page-header'><Header></Header></div> */}
        </div>
      </div>
      <div className='row'>
        <div className="col-xs-2 col-xs-offset-2">
          <div className='list-group'>
            <MyNavLink to="about">About</MyNavLink>
            <MyNavLink to="home" end>Home</MyNavLink>
            {/* <NavLink className={({isActive})=>(isActive?'erli':"list-group-item")} to="/home">Home</NavLink> */}
          </div>
        </div>
        <div className='col-xs-6'>
          <div className='panel'>
            <div className='panel-body'>
            {/* <Suspense fallback={<h1>Loading...</h1>}> */}
            <Suspense fallback={<Loading/>}>

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
              </Suspense>

              {/* {routeTable} */}
              {/* <Outlet></Outlet> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
