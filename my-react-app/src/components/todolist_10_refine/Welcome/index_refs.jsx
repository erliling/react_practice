import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types';

export default function index(props) {
    const {name, age, gender} = props;
    const myRef = useRef(null);
    // need to have let in front
    let handleClick = () =>{
        // myRef.current.focus();
        alert(myRef.current.value);
    }
  return (
    <div>
        <input ref = {myRef} />
        <button onClick={handleClick}>
            focus on the input
        </button>
    </div>
  )
}

