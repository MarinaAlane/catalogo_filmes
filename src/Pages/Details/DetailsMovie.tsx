import { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

import favoriteIcon from '../../assets/heart.png';
import favoriteIconFilled from '../../assets/favorite.png';

import { Container, ImageStyled, TextWrapper, Title, FavoriteIcon, ImageWrapper, ButtonBack } from './DetailsMovie.styles';

const DetailsMovie = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state?.movie;

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      favorites.push(movie);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } else {
      let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      favorites = favorites.filter((favMovie) => favMovie.id !== movie.id);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  };

  const navigateToBack = () => {
    navigate('/');
  };

  return (
    <Container>
      <Title>{movie?.title || 'Detalhes do Filme'}</Title>
        <>
          <p>ID do Filme: {id}</p>
          <ImageWrapper>
            <ImageStyled
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <FavoriteIcon
              src={isFavorite ? favoriteIconFilled : favoriteIcon}
              alt="Favorite"
              onClick={handleFavoriteClick}
            />
          </ImageWrapper>
          <TextWrapper>
            <p>Popularidade:</p> {movie.popularity}
            <p>Descrição:</p> {movie.overview}
          </TextWrapper>
        </>
        <ButtonBack onClick={navigateToBack}>Voltar</ButtonBack>
    </Container>
  );
};

export default DetailsMovie;
