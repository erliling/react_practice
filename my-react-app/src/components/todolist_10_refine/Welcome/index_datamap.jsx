import React from 'react'

export default function index() {
    const data = [<li>angular</li>, <li>react</li>, <li>vue</li>]
    const data2 = ['angular', 'react', 'vue']
  return (
    <div>
        <h1>frontend framework</h1>
        <ul>
            {/* {data} */
                data2.map((item, index) => {
                    return <li key={index}>{item}</li>
                })
            }
        </ul>
    </div>
  )
}
