import { useState } from 'react'
import axios from 'axios'

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

import './App.css'
import './components/Welcome/index.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const getStudentData = () => {
    axios.get('http://localhost:5173/index3.html').then(
      response => {
        console.log('success', response.data)
      },
      error => {console.log('failed', error)}
    )
  }

  return (
    <div>
      <button onClick={getStudentData}>get student data</button>
    </div>
  )
}

export default App
