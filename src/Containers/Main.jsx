import React, {useState} from 'react'

const Main = ({todos, setTodos}) => {
    const [input, setInput] = useState('')
    // const [todos, setTodos] = useState([
    //     {
    //         title: "Grab some Pizza",
    //         completed: false
    //     },
    //     {
    //         title: "Do your workout",
    //         completed: false
    //     },
    //     {
    //         title: "Hangout with friends",
    //         completed: false
    //     }
    // ])
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            console.log('Enter pressed!!!')
            addTodo(input)
            setInput('')
        }
    }
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const addTodo = title => {
        const newTodos = [...todos, {title, completed: false, display: true}]
        setTodos(newTodos)
        console.log(`${title} added success!!!`)
    }   
    const completeTodo = index => {
        console.log('clicked!')
        const newTodos = [...todos]
        newTodos[index].completed = !newTodos[index].completed
        setTodos(newTodos)
    }

    const deleteTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (
        <section className='todo-app__main'>
            <input 
                type='text' 
                className='todo-app__input' 
                placeholder='Pikachu' 
                value={input}
                onChange={e=>setInput(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <ul className='todo-app__list' id="todo-list">
                {todos.map((todo, index)=>(
                    todo.display===false ? (<></>) :(
                    <li className='todo-app__item' key={index} >
                        <div className='todo-app__checkbox' onClick={()=>completeTodo(index)} >
                            <input type="checkbox" style={todo.completed ? {backgroundColor:'#26ca299b'} : {backgroundColor:'rgba(99, 99, 99, 0.698)'} }/>
                            <label style={todo.completed ? {backgroundColor:'#26ca299b'} : {backgroundColor:'rgba(99, 99, 99, 0.698)'} }></label>
                        </div>
                        <h1 className='todo-app__item-detail'
                            style={todo.completed ? {textDecoration: 'line-through', opacity: '0.5'} : {textDecoration: 'none', opacity:'1'} }
                        >
                            {todo.title}
                        </h1>
                        <img src='./x.png' className='todo-app__item-x' alt="delete" onClick={()=>deleteTodo(index)}  />
                    </li> 
                    )
                ))}
            </ul>
        </section>
    )
}

export default Main