import React, { useState } from 'react';
import './App.css'

function Todo({ todo, index }) {
  return (
    <div className="todo">
      {todo.text}
    </div>
  )
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  }


  return (
    <div className="inputRow">
      <form onSubmit={handleSubmit}>
        <input type="text" className="input" value={value} placeholder="Enter todo..." onChange={e => setValue(e.target.value)} />
      </form>
      <div id="submitBtn" onClick={handleSubmit}>Add</div>
    </div >
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isCompleted: false
    },
    {
      text: 'Make lunch',
      isCompleted: false
    },
    {
      text: 'Build todo app',
      isCompleted: false
    }
  ])

  const addTodo = text => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos);
  }
  return (
    <div className="app">
      <div className="todo-list">
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}

      </div></div>
  )
}

export default App;