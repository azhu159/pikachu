import { useState, useEffect } from 'react';

import Header from './Containers/Header'
import Main from './Containers/Main';
import Footer from './Containers/Footer';

function App() {
  const [tasksRemaining, setTasksRemaining] = useState(0)
  const [taskDone, setTaskDone] = useState(0)
  const [itemRemaining, setItemRemaining] = useState(0)
  // const [, set] = useState(second)
  const [todos, setTodos] = useState([
    // {
    //     title: "Grab some Pizza",
    //     completed: false,
    //     display:true,
    // },
    // {
    //     title: "Do your workout",
    //     completed: false,
    //     display:true,
    // },
    // {
    //     title: "Hangout with friends",
    //     completed: false,
    //     display:true,
    // }
])
  useEffect(()=>{
    setItemRemaining(todos.length)
    setTaskDone(todos.filter(todo => todo.completed).length)
    setTasksRemaining(todos.filter(todo => !todo.completed).length) 
  },[todos])
  return (
    <div className="todo-app__root">
      <Header />
      <Main 
        todos={todos} 
        setTodos={setTodos}
      />
      {itemRemaining===0 ? (<></>) : 
      <Footer tasksRemaining={tasksRemaining}  
        todos={todos}
        setTodos={setTodos}
        taskDone={taskDone}
        setTaskDone={setTaskDone}
      />}
    </div>
  )
}

export default App;
