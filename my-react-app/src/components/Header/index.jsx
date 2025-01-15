import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function index() {
    const navigate = useNavigate()
    // const history = useHistory()
    const handleBack = () => {
        // return () => {
            navigate(-1);
            // history.goBack()
        // }
    }
  return (
    <div className='page-header'>
        <h2>React Router Demo</h2>
        <button onClick={handleBack}>back</button>
    </div>
    
  )
}
