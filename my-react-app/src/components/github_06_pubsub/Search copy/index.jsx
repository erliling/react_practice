//rfc

import React, {useRef} from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
// import EventEmitter from 'eventemitter3'

import './index.css'

export default function index(props) {
  const inputRef = useRef(null)
  // const {saveUsers, saveStatus} = props

  const getGithubData = () => {
    // console.log(inputRef.current.value)

    // isfirst:false, isloading:true
    // saveStatus({isFirst:false, isLoading:true})
    // PubSub.publish('erli', 'hello from erli')
    PubSub.publish('erli', {isFirst:false, isLoading:true})
    // EventEmitter.emit('erli', {isFirst:false, isLoading:true})
    axios.get(`/api/search/users?q=${inputRef.current.value}`).then(
      response => {
        console.log('success', response.data)
        // saveUsers(response.data.items)
        // isloading:false
        // saveStatus({isLoading:false})
        // PubSub.publish({isLoading:false, users: response.data.items})
        PubSub.publish('erli', {isLoading:false, users: response.data.items})
      },
      error => {
        console.log('failed', error)
        // isloading:false
        // saveStatus({isLoading:false, err: error.message})
        // PubSub.publish({isLoading:false, err: error.message})
        PubSub.publish('erli', {isLoading:false, err: error.message})
      }
    )
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
