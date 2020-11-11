import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    // 그냥 url로 접근시 location.state는 undefined이다. url로 접근하면 home 페이지로 이동.
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    // 그냥 url로 접근시 location.state는 undefined이다. 따라서 그냥 url로 접근하려는 것을 막으려고 예외처리 하였다.
    if (location.state) {
      return (
        <div className="detail__container">
          <img
            src={location.state.poster}
            alt="poster"
            title={location.state.title}
          />
          <div>{location.state.title}</div>
          <span>{location.state.year}</span>
          <span>{location.state.summary}</span>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Detail;
