import { useNavigate } from "react-router-dom";
import { ButtonBack, Container, MovieImage, MovieItem, MovieList, MovieTitle, Title } from "./Favorites.styles";

const Favorites = () => {
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  const navigate = useNavigate();

  const navigateToBack = () => {
    navigate('/');
  };
  
  return (
  <Container>
      <Title>Filmes Favoritos</Title>
      {favorites.length > 0 ? (
        <MovieList>
          {favorites.map((movie) => (
            <MovieItem key={movie.id}>
              <MovieImage
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <MovieTitle>{movie.title}</MovieTitle>
            </MovieItem>
          ))}
        </MovieList>
      ) : (
        <p>Você ainda não tem nenhum filme favorito</p>
      )}
      <ButtonBack onClick={navigateToBack}>Voltar</ButtonBack>
    </Container>
  );
}
export default Favorites;