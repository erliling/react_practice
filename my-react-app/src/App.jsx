import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/Hello'
import Welcome from './components/Welcome'
import './components/Welcome/index.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)
  const prop = {name: "jerry", age: 20, gender:"male"}

  return (
    <div className='todo-contianer'>
      <div className='todo-wrap'>
        <Header></Header>
        <List></List>
        <Footer></Footer>
      </div>
    </div>
  
  )
}

export default App
