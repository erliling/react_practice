import React, {useState} from 'react'

export default function index(props) {
    const {name, age, gender} = props;
  return (
    <div>
        <ul>
            <li>name: {name}</li>
            <li>age: {age}</li>
            <li>gender: {gender}</li>
        </ul>
    </div>
  )
}
