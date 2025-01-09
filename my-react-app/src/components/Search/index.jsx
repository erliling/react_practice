//rfc

import React, {useRef} from 'react'
import axios from 'axios'
import './index.css'

export default function index(props) {
  const inputRef = useRef(null)
  const {saveUsers} = props

  const getGithubData = () => {
    // console.log(inputRef.current.value)

    axios.get(`/api/search/users?q=${inputRef.current.value}`).then(
      response => {
        console.log('success', response.data)
        saveUsers(response.data.items)
      },
      error => {console.log('failed', error)}
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
