import React, { useState } from 'react';

import styles from './counter.module.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const [color, setColor] = useState('white');

  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInc = () => {
    setCount(count + 1);
  }

  const handleDec = () => {
    setCount(count - 1);
  }

  const changeColor = (e) => {
    setColor(e.target.value);
  }

  const createTodo = () => {
    // input value is stored in todoInput state variable
    //                        new todo entered in input
    const newArr = [todoInput, ...todos,]; // statefull array
    setTodos(newArr);

    // reset the input box
    setTodoInput('');
  }


  return (
    <div className={styles.container}>
      <div
        style={{
          display: 'block',
          textAlign: 'center'
        }}
      >
        <h2>Count</h2>
        <h1>{count}</h1>
        <button onClick={handleInc} >+</button>{" "}<button onClick={handleDec} >-</button>
      </div>

      <div
        style={{
          backgroundColor: color, // statefull value
          height: '300px',
          width: '300px',
          margin: 25,
          border: '1px solid',
          display: 'inline-block'
        }}
      >
      </div>
      <br />
      <label htmlFor='color' >Choose a Color</label>
      <input type="color" name="color" id="color" onChange={changeColor} />
      <br />
      <div
        style={{
          height: '300px',
          width: '300px',
          margin: 25,
          border: '1px solid',
          display: 'inline-block'
        }}
      >
        <label htmlFor='todo' >Enter Todo</label>
        {/* create state variable record the changes of below */}
        <input
          type="text"
          name="todo"
          id="todo"
          value={todoInput}
          onChange={(e) => {
            setTodoInput(e.target.value);
          }}
        />
        <button onClick={createTodo} >Create Todo</button>
        <ul>
          {todos.map((todoName, i) => (
            <li>
              {todoName}
              &nbsp;&nbsp;
              <button
                onClick={() => {
                  const oldArr = [...todos];
                  oldArr.splice(i, 1);
                  setTodos(oldArr);
                }}
              >X</button>
            </li>
          ))}
        </ul>
      </div>
      {console.log(todoInput)}
      {console.log(todos)}
    </div>
  )
}


export default Counter;