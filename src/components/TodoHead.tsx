import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const TodoHeadBlock = styled.div`
  padding-top: 3rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 2rem;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 1.25rem;
  }
  .tasks-left {
    color: #20c997;
    font-size: 1.125rem;
    margin-top: 2.5rem;
    font-weight: bold;
  }
`;

function TodoHead() {
  const todos = useTodoState()
  const undoneTasks = todos.filter(todo => !todo.done)

  const today = new Date()
  const dataString = today.toLocaleString('ko-kr', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  const dayName = today.toLocaleString('ko-kr', { weekday: 'long' })

  return (
    <TodoHeadBlock>
      <h1>{dataString}</h1>
      <div className="day">{dayName}</div>
      <div className="tasks-left">할일 {undoneTasks.length}개 남음</div>
    </TodoHeadBlock>
  );
};

export default TodoHead;