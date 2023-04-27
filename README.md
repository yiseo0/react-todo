<div align="center">
<h1>📑 To Do List 웹 앱(React)</h1>
 
본 레포지토리는 [벨로퍼트와 함께하는 모던 리액트(멋진 투두 만들기)](https://react.vlpt.us/mashup-todolist/) 미리보기를 보고 혼자 구현해본 후   
완성 코드와 비교하며 학습한 내용이 담겨있습니다. <br> 또한, <b>개인적으로 프로젝트 기능을 개선 및 추가하였습니다.</b>



[바로가기](https://toy-todolist.netlify.app/)

|기존| 기능 개선 및 추가 (23.04.27)|
|---|-----------------|
|![todo](https://user-images.githubusercontent.com/65934208/232988400-e68ba6ff-76e5-40b5-a228-201fea458e7a.gif)| ![todo_re](https://user-images.githubusercontent.com/65934208/234965541-02ad5c3d-13b2-4ab3-a6d2-6b3d39e15318.gif)|


</div>

---

## 1. 구현 조건
* `styled-components` 를 통한 컴포넌트 스타일링
* `Context API` 를 사용한 전역 상태 관리

<br>

## 2. 구현 기능
* styled-components를 통한 컴포넌트 스타일링을 하였습니다. 
* todo를 새로고침 없이 추가 및 삭제할 수 있도록 구현하였습니다. 
* contextAPI를 통해 전역으로 상태를 관리하고, context는 state와 dispatch를 분리하여 TodoCreate를 open한 상태에서 이미 존재하는 todo를 toggle하여도 TodoCreate는 리렌더링이 발생하지 않도록 구현하였습니다.

<br>

## 3. 기능 개선 및 추가 <i>(23.04.27)</i>
### [기능 개선]
- [x] <b>타입스크립트로 리팩토링</b>하였습니다.
- [x] todo를 <b>로컬 스토리지에 저장해서 반영구적</b>으로 사용할 수 있도록 구현하였습니다.    
> useEffect hook을 사용하여 Context Provider가 처음 렌더링 될 때만 로컬 스토리지를 검사하고    
기존의 todo가 있다면 해당 todo로 초기화 할 수 있도록 구현 하였습니다.
- [x] rem 단위를 사용하여 반응형 페이지로 구현하였습니다.
- [x] 텍스트 클릭해도 todo가 체크 될 수 있도록 수정하였습니다.
- [x] 함수형 컴포넌트 선언 방식을 화살표 함수에서 function 키워드로 변경하였습니다.

<br>

### [기능 추가]
- [x] <b>todo 수정 기능 추가</b>   
> todo 수정은 TodoCreate 컴포넌트에서 이루어지기 때문에, 
todo 추가/수정 구분을 위한 상태 saveId와 TodoCreate 컴포넌트가 독립적으로 사용하고 있던 상태들을 전역적으로 사용할 수 있도록 context에서 관리하였습니다.    
또한, reducer에서 todo를 추가하는 액션에 추가/수정 기능을 분기처리하였습니다.

<br>

## 4. 관련 기록
* [[토이 프로젝트] TO DO LIST 학습기록](https://velog.io/@yiseo0/%ED%86%A0%EC%9D%B4%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-TO-DO-LIST-%ED%95%99%EC%8A%B5-%EA%B8%B0%EB%A1%9D)
* [기존 리액트 프로젝트에서 타입스크립트 적용하기](https://velog.io/@yiseo0/REACT-%EA%B8%B0%EC%A1%B4-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90%EC%84%9C-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%A0%81%EC%9A%A9)
