import React, { useContext } from 'react';
import { Context } from '../App';
import { TodoTopWrap, TodoDate, TodoWeek, TodoCount } from './../styles.js'

const TodoTop = () => {
   const { todoData } = useContext(Context)
   const todoCount = todoData.filter(el=> !el.isChk).length
   return (
      <TodoTopWrap>
         <TodoDate>2023년 4월 18일</TodoDate>
         <TodoWeek>화요일</TodoWeek>
         <TodoCount>할일 {todoCount}개 남음</TodoCount>
      </TodoTopWrap>
   );
};

export default TodoTop;