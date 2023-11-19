/* eslint-disable react/jsx-key */
import { useState } from 'react'

import Todo from './components/Todo'
import TodoForm from './components/TodoForm'


import './App.css'


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Montar apresentação",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Estudar para apresentação",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Ir para academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 4,
      text: "Certificação Google Cloud Digital Leader",
      category: "Estudos",
      isCompleted: false,
    },
  ])

  return <div className='app'>
    <h1>Lista de Tarefas</h1>
    <div className='todo-list'>
      {todos.map((todo) => (
       <Todo key={todo.id} todo={todo}/>
      ))}
    </div>
    <TodoForm />
  </div>
}

export default App
