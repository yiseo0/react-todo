import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from '../TodoContext';


const Remove = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   color: #dee2e6;
   font-size: 1.5rem;
   cursor: pointer;
   &:hover {
      color: #ff6b6b;
   }
   display: none;
`

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  &:hover {
      ${Remove} {
         display: initial;
      }
  }
`;

const CheckCircle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  border: 1px solid #ced4da;
  color: #ced4da;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.25rem;
  cursor: pointer;
  ${props =>
      props.done &&
      css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
   `}
`

const Text = styled.div`
   flex: 1;
   font-size: 1.25rem;
   color: #495057;
   cursor: pointer;
   ${props =>
      props.done &&
      css`
      color: #aaa;
      text-decoration: line-through;
   `}
`


const TodoItem = ({ id, done, text }) => {
   const dispatch = useTodoDispatch()

   const onToggle = () => dispatch({ type: 'TOGGLE', id })
   const onDel = () => dispatch({ type: 'REMOVE', id })
   return (
      <TodoItemBlock>
         <CheckCircle done={done} onClick={onToggle}><MdDone /></CheckCircle>
         <Text done={done} onClick={onToggle}>{text}</Text>
         <Remove><MdDelete onClick={onDel} /></Remove>
      </TodoItemBlock>
   );
};

export default React.memo(TodoItem);