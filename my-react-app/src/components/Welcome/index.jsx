import React, {useState, useRef, useEffect} from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';

export default function index(props) {
  const [opacity, setOpacity] = useState(1);
  // let timer;
  let opacity2=1
  const root = createRoot(document.getElementById('root'))
  let timer =1;

  const removeDom = ()=> {
    // why timer is undefined
    clearInterval(timer);

    // why unmount didn't really work
    // ReactDOM.unmountComponentAtNode
    root.unmount()
  }

  // same as didmount
  useEffect(() => {
    // console.log("in");
  timer = setInterval(() => {
      console.log("in");
      // let opacity2 = opacity;
      // opacity2 -= 0.1;
      // if (opacity2<=0) {
      //   opacity2 = 1;
      // }

      // console.log(opacity);
      // setOpacity(opacity=>opacity-0.1);

      // why setOpacity didn't change opacity
      // why opacity can't be used directly
      // used opacity2 solve the problem temporarily
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
      clearInterval(timer);
    }
  }, [])
  
  return (
    <div>
        <h2 style={{opacity: opacity}}>learn react</h2>
        <button onClick={removeDom}>remove react</button>
    </div>
  )
}

