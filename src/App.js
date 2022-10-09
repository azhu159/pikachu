import { useState, useEffect } from 'react';

import Header from './Containers/Header'
import Main from './Containers/Main';
import Footer from './Containers/Footer';

function App() {
  const [tasksRemaining, setTasksRemaining] = useState(0)
  const [todos, setTodos] = useState([
    // {
    //     title: "Grab some Pizza",
    //     completed: false
    // },
    // {
    //     title: "Do your workout",
    //     completed: false
    // },
    // {
    //     title: "Hangout with friends",
    //     completed: false
    // }
])
  useEffect(()=>{
    setTasksRemaining(todos.filter(todo => !todo.completed).length) 
  },[todos])
  return (
    <div className="todo-app__root">
      <Header />
      <Main 
        todos={todos} 
        setTodos={setTodos}
      />
      {tasksRemaining===0 ? (<></>) : <Footer tasksRemaining={tasksRemaining} />}
    </div>
  )
}

export default App;
