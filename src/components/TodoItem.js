import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { HiPencilAlt } from 'react-icons/hi';
import { useTodoCreateOpen, useTodoDispatch } from '../TodoContext';

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
`;

const CheckCircle = styled.div`
  flex-shrink : 0;
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

const Button = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   color: #dee2e6;
   font-size: 1.5rem;
   margin-left: 5px;
   cursor: pointer;
   &:hover {
      color: #ff6b6b;
   }
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
   const { setOpen, setValue, setSaveId } = useTodoCreateOpen()
   const onToggle = () => dispatch({ type: 'TOGGLE', id })
   const onDel = () => dispatch({ type: 'REMOVE', id })
   const onUpdate = () => {
      setOpen(true)
      setValue(text)
      setSaveId(id)
   }

   return (
      <TodoItemBlock>
         <CheckCircle done={done} onClick={onToggle}><MdDone /></CheckCircle>
         <Text done={done} onClick={onToggle}>{text}</Text>
         <Button onClick={onUpdate}><HiPencilAlt /></Button>
         <Button onClick={onDel}><MdDelete /></Button>
      </TodoItemBlock>
   );
};

export default React.memo(TodoItem);