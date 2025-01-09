import React, {useState} from 'react'
import PropTypes from 'prop-types';

function index(props) {
    const {name, age, gender} = props;
  return (
    <div>
        <ul>
            <li>name: {name}</li>
            <li>age: {age+1}</li>
            <li>gender: {gender}</li>
        </ul>
    </div>
  )
}

index.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    gender: PropTypes.string,
}

index.defaultProps = {
    name: "erli",
    age: 10,
    gender: "male"
}

export default index;
