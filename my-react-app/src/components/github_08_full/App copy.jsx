import { useState } from 'react'
import PubSub from 'pubsub-js'

import List from './List'
import Search from './components/Search'

import './App.css'
import { useEffect } from 'react'

// https://api.github.com/search/users?q=asdf
function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    const token = PubSub.subscribe('erli', (msg, data) => {
      setMessage(data)
    })
    return () => PubSub.unsubscribe(token)
  }, [])

  const handlePublish = () => {
    PubSub.publish('erli', 'hello from erli')
  }

  return (
    <div className='container'>
      {/* <Search></Search>
      <List></List> */}
      <button onClick={handlePublish}>Publish</button>
      <p>{message}</p>
    </div>
  )
}

export default App
