import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { ContainerWrapper, ContainerList, ImageStyled, ScrollButton, TitleList } from './MovieList.styles';
import { IMovieList } from './MovieList.interfaces';

const MovieList = ({ title, movies }: IMovieList) => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const scrollContainer = (direction: string) => {
    if (containerRef.current) {
      const scrollAmount = 300;
      containerRef.current.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  const detailsMovie = (movies: IMovieList) =>{
    navigate("/detalhes", { state: { movies } });
  }
  return (
    <div>
      <TitleList>{title}</TitleList>
      <ContainerWrapper>
        <ScrollButton onClick={() => scrollContainer("left")} direction="left">{"<"}</ScrollButton>
        <ContainerList ref={containerRef}>
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div key={movie.id}>
                <ImageStyled
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  onClick={() => detailsMovie(movie)}
                />
              </div>
            ))
          ) : (
            <p>Nenhum filme encontrado.</p>
          )}
        </ContainerList>
        <ScrollButton onClick={() => scrollContainer("right")} direction="right">{">"}</ScrollButton>
      </ContainerWrapper>
    </div>
  );
};

export default MovieList;