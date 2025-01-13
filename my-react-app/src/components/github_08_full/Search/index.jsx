//rfc

import React, {useRef} from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
// import EventEmitter from 'eventemitter3'

import './index.css'

export default function index(props) {
  const inputRef = useRef(null)
  // const {saveUsers, saveStatus} = props

  const  getGithubData = async () => {
    
    PubSub.publish('erli', {isFirst:false, isLoading:true})
    
    // axios.get(`/api/search/users?q=${inputRef.current.value}`).then(
    //   response => {
    //     console.log('success', response.data)
        
    //     PubSub.publish('erli', {isLoading:false, users: response.data.items})
    //   },
    //   error => {
    //     console.log('failed', error)
        
    //     PubSub.publish('erli', {isLoading:false, err: error.message})
    //   }
    // )

    try {
      const response = await fetch(`/api/search/users?q=${inputRef.current.value}`)
      const data = await response.json()
      PubSub.publish('erli', {isLoading:false, users: data.items})
    } catch (error) {
      PubSub.publish('erli', {isLoading:false, err: error.message})
    }
  }

  return (
    <div>
        <section className='jumbotron'>
        <h3 className='jumbotron-heading'>Search Github Users</h3>
        <div>
            <input ref={inputRef} type="text" placeholder='enter the name you search'/>&nbsp;
            <button onClick={getGithubData}>Search</button>
        </div>
        </section>
    </div>
  )
}
