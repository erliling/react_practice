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
  const getStudentData = () => {
    axios.get('/2api/students').then(
      response => {
        console.log('success', response.data)
      },
      error => {console.log('failed', error)}
    )
  }

  const getGithubData = () => {
    axios.get('/api/search/users?q=asdf').then(
      response => {
        console.log('success', response.data)
      },
      error => {console.log('failed', error)}
    )
  }

  return (
    <div className='container'>
      <Search></Search>
      <List></List>
    </div>
  )
}

export default App
