import React from 'react'

const Footer = ({tasksRemaining,todos,setTodos,taskDone}) => {
  const allTodo = () => {
    console.log('All clicked!!!')
    const newTodos = todos.map((todo,index)=>{
      todo.display = true
      return todo
    })
    setTodos(newTodos)
  }
  const activeTodo = () => {
    console.log('Active clicked!!!')
    const newTodos = todos.map((todo,index)=>{
      if (todo.completed === true) {
        todo.display = false
      }
      return todo
    })
    setTodos(newTodos)
  }
  const completedTodo = () => {
    console.log('Completed clicked!!!')
    const newTodos = todos.map((todo,index)=>{
      if (todo.completed === false) {
        todo.display = false
      }
      return todo
    })  
    setTodos(newTodos)
  }
  const clearCompleted = () => {
    console.log('Clear Completed clicked!!!')
    const newTodos = todos.filter(todo=>!todo.completed) 
    setTodos(newTodos)  
  }
  return (
    <footer className='todo-app__footer' id="todo-footer">
        <div className='todo-app__total'>
          <label htmlFor="2">{tasksRemaining} left</label>
        </div>
        <ul className='todo-app__view-buttons'>
          <button onClick={allTodo}>All</button>
          <button onClick={activeTodo}>Active</button>
          <button onClick={completedTodo}>Completed</button>
        </ul>
        {taskDone===0? (<></>) : (<div className='todo-app__clean'>
          <button onClick={clearCompleted}>Clear completed</button>
        </div>)}
    </footer>
  )
}

export default Footer