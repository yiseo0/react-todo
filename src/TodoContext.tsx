import React, { useReducer, createContext, useContext, useRef, Dispatch } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export type Todo = {
  id: number,
  text: string,
  done: boolean
}

type TodoState = Todo[]

type Action =
  | { type: 'CREATE', todo: Todo }
  | { type: 'TOGGLE', id: number }
  | { type: 'REMOVE', id: number }
  | { type: 'INITIAL', todos: TodoState }

type TodosDispatch = Dispatch<Action>;

type TodoCreateOpenContextType = {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  saveId: number,
  setSaveId: React.Dispatch<React.SetStateAction<number>>
}

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

function todoReducer(state: TodoState, action: Action): TodoState {
  let updatedTodos: TodoState;
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
    case 'INITIAL':
      updatedTodos = action.todos
      break;
    default:
      throw new Error(`Unhandled action`);
  }

  localStorage.setItem('todos', JSON.stringify(updatedTodos))
  return updatedTodos
}

const TodoStateContext = createContext<TodoState | undefined>(undefined);
const TodoDispatchContext = createContext<TodosDispatch | undefined>(undefined);
const TodoNextIdContext = createContext<React.MutableRefObject<number> | undefined>(undefined);
const TodoCreateOpenContext = createContext<TodoCreateOpenContextType | undefined>(undefined);

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(Math.max(...state.map(todo => todo.id)) + 1);
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('');
  const [saveId, setSaveId] = useState(0)

  useEffect(() => {
    const todosLocalStorage = localStorage.getItem('todos')
    todosLocalStorage && dispatch({ type: 'INITIAL', todos: JSON.parse(todosLocalStorage) })
    console.log('리렌더링')
  }, [])

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