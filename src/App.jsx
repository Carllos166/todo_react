/* eslint-disable react/jsx-key */
import { useState } from 'react'


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
      {todos.map((todo) =>(
        <div className="todo">
          <div className="content">
            <p>{todo.text}</p>
            <p className="category">({todo.category})</p>
          </div>
          <div>
            <button>Completar</button>
            <button>x</button>
          </div>
        </div>
      ))}
    </div>
  </div>
}

export default App
