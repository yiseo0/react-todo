import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Context } from '../App';
import { TodoBottomButton, TodoBottomForm, TodoBottomInput, TodoBottomWrap } from '../styles';

const TodoBottom = () => {
   const [button, setButton] = useState(false)
   const [todoText, setTodoText] = useState('')
   const { todoData, setTodoData } = useContext(Context)

   const fnTodoText = (e) => {
      setTodoText(e.target.value)
   }

   const fnTodoSubmit = (e) => {
      e.preventDefault()
      setTodoData(
         [...todoData,
         { id: todoData.length + 1, text: todoText, isChk: '' }]
      )
      setTodoText('')
   }


   return (
      <TodoBottomWrap>
         {
            button
            &&
            <TodoBottomForm onSubmit={fnTodoSubmit}>
               <TodoBottomInput type="text" onChange={fnTodoText} value={todoText} placeholder="할 일을 입력 후, Enter를 누르세요" />
            </TodoBottomForm>
         }
         <TodoBottomButton onClick={() => setButton(!button)} status={button && 'active'}>
            <FontAwesomeIcon icon={faPlus} size="sm" style={{ color: '#fff' }} />
         </TodoBottomButton>
      </TodoBottomWrap >
   );
};

export default TodoBottom;