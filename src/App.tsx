import './App.css';
import { createGlobalStyle } from 'styled-components';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext';

const App = () => {
  const GlobalStyle = createGlobalStyle`
    body {
      background-color: #e9ecef;
    }

    @media only screen and (max-width: 480px) {
      html {font-size:12px;}
    }
  `

  return (
    <>
      <TodoProvider>
        <GlobalStyle />
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </TodoProvider>
    </>
  );
};

export default App;