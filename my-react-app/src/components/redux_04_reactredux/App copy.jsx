import {createTheme, ThemeProvider, alpha, getContrastRatio} from '@mui/material/styles'

import Count from '../../containers/Count'
import store from '../../redux/store'

import './App.css'

function App() {

  return (
    <div className='container'>
      <Count ></Count>
    </div>
    
  )
}

export default App
