import { useState } from 'react'

import List from '../List'
import Search from '../Search'

import './App.css'
import './components/todolist_10_refine/Welcome/index.css'

// https://api.github.com/search/users?q=asdf
function App() {

  const [users, setUsers] = useState([])
  const [isFirst, setIsFirst] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [err, setErr] = useState('')

  const saveUsers = (users) => {
    setUsers(users)
  }

  const saveStatus = (stateObj) => {
    const {isFirst, isLoading, err} = stateObj
    setIsFirst(isFirst)
    setIsLoading(isLoading)
    setErr(err)
  }

  return (
    <div className='container'>
      <Search saveUsers={saveUsers} saveStatus={saveStatus}></Search>
      <List users={users} isFirst={isFirst} isLoading={isLoading} err={err}></List>
    </div>
  )
}

export default App
