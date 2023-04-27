import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 1.25rem 2rem;
  padding-bottom: 3rem;
  overflow-y: auto;
`

const TodoList = () => {
   const todos = useTodoState()
   return (
      <TodoListBlock>
         {todos.map(todo => (
            <TodoItem
               key={todo.id}
               id={todo.id}
               text={todo.text}
               done={todo.done} />
         ))}
      </TodoListBlock>
   );
};

export default TodoList;