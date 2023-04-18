import styled from 'styled-components';

export const TodoTopWrap = styled.div`
padding: 48px 32px 24px;
border-bottom: 1px solid rgb(233, 236, 239);
`
export const TodoDate = styled.h1`
margin: 0;
color: #343a40;
font-size: 36px;
`
export const TodoWeek = styled.div`
margin-top: 4px;
color: #868e96;
font-size: 21px;
`
export const TodoCount = styled.div`
color:rgb(32, 201, 151);
font-size: 18px;
margin-top: 40px;
font-weight: bold;
`
export const TodoListWrap = styled.div`
flex-grow: 1;
padding: 20px 32px 48px;
border-bottom: 1px solid rgb(233, 236, 239);
`
export const TodoListUl = styled.ul`
list-style: none;
margin: 0;
padding: 0;
`
export const TodoListLi = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
padding: 12px 0;
color:${props => props.color};
font-size: 18px;
`
export const TodoListChk = styled.span`
width: 32px;
height: 32px;
line-height: 32px;
border: 1px solid ${props => props.border};
border-radius: 50%;
margin-right: 20px;
color: rgb(56, 217, 169);
text-align: center;
cursor: pointer;
`
export const TodoListInput = styled.input`
display: none;
`

export const TodoListText = styled.span`
flex-grow: 1;
font-size: 21px;
text-decoration: ${props => props.deco};
cursor: pointer;
`
export const TodoBottomWrap = styled.div`
position: relative;  
`
export const TodoBottomButton = styled.button`
position: absolute;
left: 50%;
bottom: -40px;
display: flex;
justify-content: center;
align-items: center;
width: 80px;
height: 80px;
margin-left:-40px;
border-radius: 50%;
border: 0;
background-color: ${props => props.status == 'active' ? 'rgb(255, 107, 107)' : 'rgb(99, 230, 190)'};
transform: ${props => props.status == 'active' ? 'rotate(45deg);' : 'rotate(0deg);'};
font-size: 50px;
cursor: pointer;
&:hover{
   opacity: 0.7;
}

`
export const TodoBottomForm = styled.form`
padding:32px 32px 72px;
border-top: 1px solid rgb(233, 236, 239);
background: rgb(248, 249, 250);
`
export const TodoBottomInput = styled.input`
width: 100%;
padding: 12px;
border-radius: 4px;
border: 1px solid rgb(222, 226, 230);
outline: none;
font-size: 18px;
box-sizing: border-box;
`