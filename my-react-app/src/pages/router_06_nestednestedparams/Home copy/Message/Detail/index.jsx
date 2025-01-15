import React from 'react'
import { useParams } from 'react-router-dom'

export default function index() {
  const detailData = [
    {id:'01', content:'hello'},
    {id:'02', content:'welcome'},
    {id:'03', content:'hola'},
  ]
  // console.log(props)
  const {id, title} = useParams()
  const content = detailData.find((detailObj) => {
    return detailObj.id === id
  })
  return (
    <ul>
        <li>ID: {id}</li>
        <li>Title: {title}</li>
        <li>Content: {content.content}</li>
    </ul>
    // <div></div>
  )
}
