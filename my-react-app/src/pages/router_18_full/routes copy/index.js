import { Navigate } from "react-router-dom"

import About from '../../About'
import Home from '../../Home'

export default [
    {
        path: 'about',
        element: <About/>
      },
      {
        path: 'home/*',
        element: <Home/>
      },
      {
        path: '',
        element: <Navigate to='/about' />
      },
]