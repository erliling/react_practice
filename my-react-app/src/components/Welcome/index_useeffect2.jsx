import React, {useState, useRef, useEffect} from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';

// let timer;
// let prevListRef = null


function index(props) {
  // const [opacity, setOpacity] = useState(1);
  const [newsArr, setNewsArr] = useState([]);
  let listRef = useRef(null)
  let preRef = useRef(0)
  // prevListRef = useRef(null)
  // let listRef = null;
  
  // const rootRef = useRef(null);

  // have to monitor newsArr, otherwise newsArr won't change
  useEffect(() => {
      let timer = setInterval(() => {
      // console.log("in");
      // console.log(newsArr.length);
      const newsitem = 'news'+(newsArr.length+1)
      setNewsArr([newsitem, ...newsArr])
      console.log(listRef.current.scrollTop)
    // console.log(listRef.current.scrollHeight)
    if (preRef.current =! null) {
      // console.log(prevListRef.current.scrollHeight)


      // not working at all?? always get the same value for current and previous
      // listRef.current.scrollTop += listRef.current.scrollHeight - preRef.current.scrollHeight
      listRef.current.scrollTop += 30

    }
    preRef.current = listRef.current;
    console.log(listRef.current.scrollTop)
    }, 1000);

    // if delete this return part, timer will speed up
    return () => {
      console.log("come here")
      clearInterval(timer);
    }
  }, [newsArr])

  // useEffect(() => {
    
  // }, [newsArr])
  
  return (
    <div className='list' ref={listRef}>
      {
        newsArr.map((n, index) => {
          return <div key={index} className="news"> {n}</div>
        })
      }
        {/* <div id="news">news1</div>
        <div id="news">news1</div>
        <div id="news">news1</div>
        <div id="news">news1</div>
        <div id="news">news1</div>
        <div id="news">news1</div>
        <div id="news">news1</div>
        <div id="news">news1</div> */}
    </div>
  )
}

export default index;

