import React, { createContext, useState } from 'react';
import './App.css';
import styled from 'styled-components';
import TodoTop from './components/TodoTop';
import TodoList from './components/TodoList';
import TodoBottom from './components/TodoBottom';
import data from './data';

export let Context = createContext()

const App = () => {
  const [todoData, setTodoData] = useState([...data])

  const Todo = styled.div`
    display: flex;  
    flex-direction: column;
    justify-content: space-between;
    width: 512px;
    height: 768px;
    margin: 96px auto 32px;
    border-radius: 15px;
    background-color: #fff;
    box-shadow: 0 0 10px 10px #eee;
    box-sizing: border-box;
  `

  return (
    <Todo>
      <Context.Provider value={{ todoData, setTodoData }}>
        <TodoTop />
        <TodoList />
        <TodoBottom />
      </Context.Provider>
    </Todo>
  );
};

export default App;