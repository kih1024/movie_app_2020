import React from "react";
import "./About.css";

// 이 웹 사이트를 설명하는 페이지
function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>“역대 평점 높은 영화를 보여주는 페이지”</span>
      <span>−- 현재 기준</span>
    </div>
  );
}

export default About;
