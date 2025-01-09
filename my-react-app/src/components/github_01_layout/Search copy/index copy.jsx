//rfc

import React from 'react'
import './index.css'

export default function index() {
  return (
    <div className='search_content'>
        <label htmlFor="">Search Github Users</label>
        <form>
            <input className='search_input' type="text" placeholder='enter the name you search'/>
            <button className='search_button'>Search</button>
        </form>
    </div>
  )
}
