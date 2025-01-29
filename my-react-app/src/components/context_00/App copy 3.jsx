import {createTheme, ThemeProvider, alpha, getContrastRatio} from '@mui/material/styles'

import Count from './containers/Count'
import Person from './containers/Person'
import store from './redux/store'
import A from './components/A'


import './App.css'

function App() {

  return (
    <div className='container'>
      <A/>
    </div>
    
  )
}

export default App
