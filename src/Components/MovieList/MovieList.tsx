import { useRef } from 'react';
import { ContainerWrapper, ContainerList, ImageStyled, ScrollButton, TitleList } from './MovieList.styles';

const MovieList = ({ title, movies, onImageClick }) => {
  const containerRef = useRef(null);

  const scrollContainer = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 300;
      containerRef.current.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

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
                  onClick={() => onImageClick(movie)}
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
