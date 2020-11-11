import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
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
