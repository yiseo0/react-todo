import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
   width: 85%;
   max-width: 512px;
   position: relative;
   background: white;
   border-radius: 1rem;
   box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.04);

   margin: 5.625rem auto 0;
   display: flex;
   flex-direction: column;
`;

const TodoTemplate = ({children}) => {
   return (
      <TodoTemplateBlock>{children}</TodoTemplateBlock>
   );
};

export default TodoTemplate;