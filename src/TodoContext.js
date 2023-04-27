import React, { useReducer, createContext, useContext, useRef } from 'react';
import { useState } from 'react';

const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: false
  }
];

function todoReducer(state, action) {
  let updatedTodos;
  switch (action.type) {
    case 'CREATE':
      if (state.find(todo => todo.id === action.todo.id)) {
        // 수정
        updatedTodos = state.map(todo =>
          todo.id === action.todo.id ? { ...todo, text: action.todo.text } : todo
        );
      } else {
        // 추가
        updatedTodos = state.concat(action.todo);
      }
      break;
    case 'TOGGLE':
      updatedTodos = state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
      break;
    case 'REMOVE':
      updatedTodos = state.filter(todo => todo.id !== action.id);
      break;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }

  localStorage.setItem('todos', JSON.stringify(updatedTodos))
  return updatedTodos
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();
const TodoCreateOpenContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer,
    // 로컬 스토리지 todos 유무에 따른 초기화
    JSON.parse(localStorage.getItem('todos')) || initialTodos
  );
  const nextId = useRef(Math.max(...state.map(todo => todo.id)) + 1);
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('');
  const [saveId, setSaveId] = useState(0)

  return (
    <TodoDispatchContext.Provider value={dispatch}>
      <TodoStateContext.Provider value={state}>
        <TodoNextIdContext.Provider value={nextId}>
          <TodoCreateOpenContext.Provider value={{ open, setOpen, value, setValue, saveId, setSaveId }}>
            {children}
          </TodoCreateOpenContext.Provider>
        </TodoNextIdContext.Provider>
      </TodoStateContext.Provider >
    </TodoDispatchContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useTodoCreateOpen() {
  const context = useContext(TodoCreateOpenContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}