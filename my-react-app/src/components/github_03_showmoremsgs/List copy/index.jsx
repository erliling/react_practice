import React from 'react'
import './index.css'

export default function index(props) {
    const {users, isFirst, isLoading, err} = props

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
