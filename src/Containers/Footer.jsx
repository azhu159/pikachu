import React from 'react'

const Footer = ({tasksRemaining}) => {
  return (
    <footer className='todo-app__footer' id="todo-footer">
        <div className='todo-app__total'>
          <label htmlFor="2">{tasksRemaining} left</label>
        </div>
        <ul className='todo-app__view-buttons'>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </ul>
        <div className='todo-app__clean'>
          <button>Clear completed</button>
        </div>
    </footer>
  )
}

export default Footer