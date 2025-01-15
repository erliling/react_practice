import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import querystring from 'query-string'

export default function index() {
  const detailData = [
    {id:'01', content:'hello'},
    {id:'02', content:'welcome'},
    {id:'03', content:'hola'},
  ]
  // console.log(props)
  const {search} = useLocation()
  const {id, title} = querystring.parse(search.slice(1))
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
