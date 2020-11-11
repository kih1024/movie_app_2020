import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

// 여기서 link는 html에 a태그와 같음. 차이점은 a태그는 링크로 들어갈때마다 새로고침해서 리액트 특성을 죽인다. 하지만 react-router-dom의 Link는 새로고침을 하지않고 동적으로 페이지가 바뀌기 때문에 리액트의 장점을 그대로 이용할수 있다. 주의할점은 Router 안에 있어야 동작 한다는것이다. 여기서는 HashRouter 안에 Navigation 컴포넌트를 넣었기 때문에 동작하는것이다.
function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
