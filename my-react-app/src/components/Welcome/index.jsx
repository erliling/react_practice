import React, {useState} from 'react'

export default function index() {
    const [isHot, setCount] = useState("hot") 
  return (
    <div>
        <h1 onClick={demo}>{isHot}</h1>
    </div>
  )

  function demo() {
    console.log("I've been clicked");
    console.log("this = "+ this);

  }
}
