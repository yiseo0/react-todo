import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Context } from '../App';
import { TodoListChk, TodoListLi, TodoListText, TodoListUl, TodoListWrap } from '../styles';

const TodoList = () => {
   const { todoData, setTodoData } = useContext(Context)
   const fnTodoChange = (id) => {
      setTodoData(todoData.map(el => {
         if (el.id === id) {
            return { ...el, isChk: !el.isChk }
         } else {
            return el
         }
      }))
   }

   const fnTodoDel = (id) => {
      setTodoData(
         todoData.filter(el => el.id !== id)
      )
   }

   return (
      <TodoListWrap>
         <TodoListUl>
            {
               todoData.map(el =>
                  <TodoListLi key={el.id} color={'gray'} >
                     <TodoListChk border={el.isChk ? 'rgb(56, 217, 169)' : 'lightgray'} onClick={() => fnTodoChange(el.id)}>
                        {
                           el.isChk &&
                           <FontAwesomeIcon icon={faCheck} />
                        }
                     </TodoListChk>
                        <TodoListText deco={el.isChk ? 'line-through' : 'none'}>{el.text}</TodoListText>
                     <FontAwesomeIcon icon={faTrash} onClick={() => fnTodoDel(el.id)} />
                  </TodoListLi>
               )
            }
         </TodoListUl>
      </TodoListWrap>
   );
};

export default TodoList;