import { useState } from 'react'
import axios from 'axios'

import Header from './components/Header'
import List from '../List'
import Footer from '../todolist_10_refine/Footer'

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
    <>
    <div>
      <button onClick={getStudentData}>get student data</button>
    </div>
    <div>
      <button onClick={getGithubData}>get github data</button>
    </div>
    </>
  )
}

export default App
