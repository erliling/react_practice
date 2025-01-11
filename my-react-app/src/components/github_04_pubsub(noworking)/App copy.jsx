import { useState } from 'react'

import List from '../List'
import Search from '../Search'

import './App.css'

// https://api.github.com/search/users?q=asdf
function App() {

  return (
    <div className='container'>
      <Search></Search>
      <List></List>
    </div>
  )
}

export default App
