import {createTheme, ThemeProvider, alpha, getContrastRatio} from '@mui/material/styles'

import Count from '../../containers/Count'
import Person from '../../containers/Person'
import store from '../../redux/store'
import A from '../A'
import B from '../B'
import C from '../C'
import ErrorBoundary from '../ErrorBoundary'


import './App.css'

function App() {

  return (
    <div className='container'>
      <ErrorBoundary>
        <A erli={(name1)=><B name1={name1}/>}/>
      </ErrorBoundary>
      
    </div>
    
  )
}

export default App
