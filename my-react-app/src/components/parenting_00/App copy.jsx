import {createTheme, ThemeProvider, alpha, getContrastRatio} from '@mui/material/styles'

import Count from '../../containers/Count'
import Person from '../../containers/Person'
import store from '../../redux/store'
import A from '../A'
import B from '../B'


import './App.css'

function App() {

  return (
    <div className='container'>
      <A>
        <B/>
      </A>
    </div>
    
  )
}

export default App
