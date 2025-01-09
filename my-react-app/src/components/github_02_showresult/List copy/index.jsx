import React from 'react'
import './index.css'

export default function index(props) {
    const {users} = props

  return (
    <div>
        <div className='row'>
            {
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
