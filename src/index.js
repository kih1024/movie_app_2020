import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// <App /> 을 컴포넌트라고 하고 리액트는 컴포넌트로 동작한다. 리액트 형식임. App을 쓰면 그냥 함수임. 이것은 jsx(javascript안에 html)라는 리액트에 특화된 개념임.
// 컴포넌트란 보시다시피 HTML을 반환하는 함수다.
// 주의할점
// 컴포넌트의 이름은 대문자로 시작해야함.
//  리액트 어플리케이션은 하나의 컴포넌트만을 랜더링 해야 하기때문에 App컴포넌트에 이어서 못씀. 따라서 App 컴포넌트 안에다 써야함. 즉 컴포넌트는 컴포넌를 쓴다. 그리고 컴포넌트를 호출할때 속성들을 마음대로 정의 해서 그 속성들을 컴포넌트의 아규먼트로 넘겨서 컴포넌트 내에서 마음대로 쓸수 있다. 컴포넌트도 어떻게 보면 메소드라서
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// serviceWorker.unregister();
