//rfc

import React from 'react'
import './index.css'

export default function index() {
  return (
    <div>
        <section className='jumbotron'>
        <h3 className='jumbotron-heading'>Search Github Users</h3>
        <div>
            <input type="text" placeholder='enter the name you search'/>&nbsp;
            <button >Search</button>
        </div>
        </section>
    </div>
  )
}
