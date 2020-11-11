import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

// 클래스 형식의 컴포넌트, state를 이용하기 위해서.
class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  // 영화 정보를 얻어오는 API에서 영화 정보를 동기적으로 받아온다.
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    // 영화 정보를 다 받아오면 state.isLoading의 값을 false로 바꾼다
    this.setState({ movies, isLoading: false });
  };
  // 리액트 라이프 사이클에 의해서 render 함수 다음에 바로 실행됨.
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    /*     isLoading 값이 True(아직 영화정보가 로딩이 안되었다면)이면 Loading 텍스트를 출력.
    isLoading 값이 False이면(영화 로딩이 다 되었다면) map함수를 이용하여 영화 컴포넌트들을 생성. */
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
