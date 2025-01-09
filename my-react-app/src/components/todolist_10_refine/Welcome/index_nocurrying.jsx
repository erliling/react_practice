import React, {useState, useRef} from 'react'

export default function index(props) {
  const [username, setUsername] = useState("username")  
  const [password, setPassword] = useState("password")  
  
    // const myRef1 = useRef(null);
    // const myRef2 = useRef(null);

    // need to have let in front
    let handleSubmit = () =>{
        // myRef.current.focus();
        alert(username + " " + password);
    }
    let saveUsername = (event) => {
      setUsername(event.target.value);
    }
    let savePassword = (event) => {
      setPassword(event.target.value);
    }

    let saveFormData = (dataType, event) => {
      // if not currying function, this will only be called 
      //alert(event);

      // return (event) => {
      //   if (dataType == 'username') {
      //     setUsername(event.target.value);
      //   } else {
      //     setPassword(event.target.value);
      //   }
      // }

      if (dataType == 'username') {
            setUsername(event.target.value);
          } else {
            setPassword(event.target.value);
          }
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            username: <input type="text" name="username" onChange={event => saveFormData('username', event)}/>
            password: <input type="password" name="password" onChange={event => saveFormData('password', event)}/>
            <button>log in</button>
        </form>
    </div>
  )
}

