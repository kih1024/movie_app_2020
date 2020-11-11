import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

// 리액에트에서 라우트 되는 원리는 exact 속성이 없다면 http://localhost:3000/#/about 입력시 두개의 컴포넌트를 순차적으로 불러온다. 왜냐하면 저 url에 두개의 path가 다 포함되어있어서
// 그래서 exact를 써서 정확히 그 path 일때만 동작하게 하면 해결 할 수 있다.
// url에 # 을 없앨수 있는 방법은 HashRouter대신에 BrowserRouter 사용하면 되지만 깃허브 페이지에 올릴때 불편하기 때문에 HashRouter을 쓴다.
function App() {
  return (
    <HashRouter>
      <Navigation />
      {/* 라우터에 있는 모든 라우트는 특정 컴포넌트로 보낼때 어떤한 props들도 같이 보낸다. 그래서 컴포넌트에서 이 props들을 사용할 수 있다. Link의 to 속성은 state를 써서 state data를 이 props에 끼어서 같이 보낼수 있다. */}
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
