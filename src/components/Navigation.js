import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

// 왼쪽 메뉴바 컴포넌트
function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
