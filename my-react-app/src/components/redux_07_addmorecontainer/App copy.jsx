import {createTheme, ThemeProvider, alpha, getContrastRatio} from '@mui/material/styles'

import Count from '../../containers/Count'
import Person from '../../containers/Person'
import store from '../../redux/store'

import './App.css'

function App() {

  return (
    <div className='container'>
      {/* <Count store={store}></Count> */}
      <Count></Count>
      <hr />
      <Person></Person>
    </div>
    
  )
}

export default App
