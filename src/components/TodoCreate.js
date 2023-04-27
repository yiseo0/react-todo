import React from 'react';
import { MdAdd } from 'react-icons/md';
import styled, { css } from 'styled-components';
import { useTodoCreateOpen, useTodoDispatch, useTodoNextId } from '../TodoContext';

const InsertFormPositioner = styled.form`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.div`
  background: #f8f9fa;
  padding : 2rem 2rem 4.375rem;
  border-top: 1px solid #e9ecef;

  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 1.125rem;
  box-sizing: border-box;
`;

const CircleButton = styled.button`
   background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  z-index: 5;
  cursor: pointer;
  width: 5rem;
  height: 5rem;
  align-items: center;
  justify-content: center;
  font-size: 3.75rem;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  transition: 0.125s all ease-in;

  ${props =>
      props.open &&
      css`
      background: #fa5252;
      &:hover {
         background: #ff8787;
      }
      transform: translate(-50%, 50%) rotate(45deg);
  `}
`

const TodoCreate = () => {
   const { open, setOpen, value, setValue, saveId, setSaveId } = useTodoCreateOpen()
   const dispatch = useTodoDispatch()
   const nextId = useTodoNextId()

   const onToggle = () => {
      setOpen(!open)
   }
   const onChange = e => setValue(e.target.value);
   const onSubmit = e => {
      e.preventDefault();
      dispatch({
         type: 'CREATE',
         todo: {
            id: saveId ? saveId : nextId.current,
            text: value,
            done: false
         }
      })
      setValue('');
      setOpen(false);
      saveId ? setSaveId(0) : nextId.current += 1;
   }

   return (
      <>
         {
            open &&
            <InsertFormPositioner onSubmit={onSubmit}>
               <InsertForm>
                  <Input
                     autoFocus
                     placeholder="할 일을 입력 후, Enter 를 누르세요"
                     value={value}
                     onChange={onChange}
                  />
               </InsertForm>
            </InsertFormPositioner>
         }
         <CircleButton onClick={onToggle} open={open}>
            <MdAdd />
         </CircleButton>
      </>
   );
};

export default React.memo(TodoCreate);