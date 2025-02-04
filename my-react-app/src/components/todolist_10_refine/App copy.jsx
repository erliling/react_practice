import { useState } from 'react'

import Header from '../Header'
import List from '../List'
import Footer from '../Footer'

import './App.css'
import './components/Welcome/index.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [todos, setTodos] = useState([{id: '001', name: 'eat', done: true}, 
  {id: '002', name: 'drink', done: true}, 
  {id: '003', name: 'code', done: true}])
  const prop = {name: "jerry", age: 20, gender:"male"}

  const addTodo = (data) => {
    // console.log('from app', data)
    const newTodos = [data, ...todos]
    setTodos(newTodos)
  }

  const updateTodo = (id, done) => {
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) 
        return {...todoObj, done}
      else
        return todoObj
    })
    setTodos(newTodos)
  }

  const updateTodoCheckall = (done) => {
    const newTodos = todos.map((todoObj) => {
      return {...todoObj, done}
    })
    setTodos(newTodos)
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id != id
    })
    setTodos(newTodos)
  }

  const deleteDoneTodo = () => {
    const newTodos = todos.filter((todoObj) => {
      return !todoObj.done
    })
    setTodos(newTodos)
  }

  return (
    <div className='todo-contianer'>
      <div className='todo-wrap'>
        <Header addTodo={addTodo}></Header>
        <List todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo}></List>
        <Footer todos={todos} updateTodoCheckall={updateTodoCheckall} deleteDoneTodo={deleteDoneTodo}></Footer>
      </div>
    </div>
  
  )
}

export default App
