import React, {createContext, useContext, useState, useEffect} from 'react'
// import PubSub from 'pubsub-js'
import EventEmitter from 'eventemitter3'

import './index.css'

export default function index(props) {
    // const {users, isFirst, isLoading, err} = props

    const [users, setUsers] = useState([])
    const [isFirst, setIsFirst] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [err, setErr] = useState('')
    // var token = ''
    const eventEmitter = new EventEmitter()
    // const appStatus = {users, isFirst, isLoading, err}


    useEffect(() => {
        const saveAllData = (allData) => {
            const {users, isFirst, isLoading, err} = allData
            setUsers(users)
            setIsFirst(isFirst)
            setIsLoading(isLoading)
            setErr(err)
        }
        eventEmitter.on('erli', saveAllData)
        return () => {
            eventEmitter.off('erli', saveAllData)
        }
    }, [])

  return (
    <div>
        <div className='row'>
            {
                isFirst?<h2>Welcome</h2> :
                isLoading?<h2>Loading</h2> :
                err?<h2 style={{color:'red'}}>{err}</h2> :
                users.map((userObj)=>{
                    return (
                        <div key={userObj.id} className='card'>
                            <a href={userObj.html_url} target="_blank">
                                <img src={userObj.avatar_url} style={{width:'100px'}} alt="" />
                            </a>
                            <p className='card-text'>{userObj.login}</p>
                        </div>
                    )
                })
            }
            
            
        </div>
        
    </div>
  )
}
