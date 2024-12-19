import React, {useState, useRef} from 'react'

export default function index(props) {
  
    const myRef1 = useRef(null);
    const myRef2 = useRef(null);

    // need to have let in front
    let handleSubmit = () =>{
        // myRef.current.focus();
        alert(myRef1.current.value + " " + myRef2.current.value);
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            username: <input type="text" name="username" ref={myRef1}/>
            password: <input type="password" name="password" ref={myRef2}/>
            <button>log in</button>
        </form>
    </div>
  )
}

