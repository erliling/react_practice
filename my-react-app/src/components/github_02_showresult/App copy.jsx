import { useState } from 'react'
import axios from 'axios'

import List from '../List'
import Search from '../Search'

import './App.css'
import './components/todolist_10_refine/Welcome/index.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// https://api.github.com/search/users?q=asdf
function App() {

  const [users, setUsers] = useState([])
  const saveUsers = (users) => {
    setUsers(users)
  }

  return (
    <div className='container'>
      <Search saveUsers={saveUsers}></Search>
      <List users={users}></List>
    </div>
  )
}

export default App
