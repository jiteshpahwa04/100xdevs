import { useState } from 'react'
import './App.css'
import { Todo } from './Todo'

function App() {

  const [todo, setTodo] = useState({
    title: "Go to gym",
    description: "Go now or you will get fat",
    done: false
  })

  return (
    <>
      <Todo  todo={todo}/>
    </>
  )
}

export default App
