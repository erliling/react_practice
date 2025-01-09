import React, {Component} from 'react'
import Mymodule, {Component1} from './module.js'
// import Mymodule from './module.js'

// const {Component1} = Mymodule

export default function index() {
  return (
    <div>hello react {Mymodule}</div>
  )
}
