import React, {useState, useRef, useEffect} from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';

// let timer;

export default function index(props) {
  const [opacity, setOpacity] = useState(1);
  // if define timer here, it becomes a local variable not global one
  // let timer;
  let opacity2=1
  // const root = createRoot(document.getElementById('root'))
  const rootRef = useRef(null);

  const removeDom = ()=> {
    // why timer is undefined - solved
    // clearInterval(timer);

    // why unmount didn't really work
    // solution1
    // ReactDOM.unmountComponentAtNode(document.getElementById('root'));

    // solution2
    let myBtn = createRoot(document.getElementById('myBtn'));
    myBtn.unmount();
    
    // solution3
    // const root_elem = document.getElementById("root");
    // document.body.removeChild(root_elem)
    
  }

  // same as didmount
  useEffect(() => {
      let timer = setInterval(() => {
      console.log("in");
      setOpacity(opacity => opacity-0.1);
      opacity2 -= 0.1;
      if (opacity2 <= 0) {
        setOpacity(1);
        opacity2 = 1;
      }
    }, 200);
    return () => {
      // why it didn't come into this area when unmount
      // why timer is undefined, so it can't be stopped
      console.log("come here")
      clearInterval(timer);
    }
  }, [])
  
  return (
    <div>
        <h2 style={{opacity: opacity}}>learn react</h2>
        <button id="myBtn" onClick={removeDom}>remove react</button>
    </div>
  )
}

