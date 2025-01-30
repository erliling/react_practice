import {createTheme, ThemeProvider, alpha, getContrastRatio} from '@mui/material/styles'

import Count from './containers/Count'
import Person from './containers/Person'
import store from './redux/store'
import A from './components/A'
import B from './components/B'
import C from './components/C'


import './App.css'

function App() {

  return (
    <div className='container'>
      <A erli={(name1)=><C name1={name1}/>}/>
    </div>
    
  )
}

export default App
