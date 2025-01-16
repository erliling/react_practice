import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export default function index() {

  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/home/message')
    }, 2000)
    return () => {}
  }, [])

  return (
    <ul>
      <li>new1</li>
      <li>new2</li>
      <li>new3</li>
    </ul>
  )
}
