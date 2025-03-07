import { useEffect, useState } from 'react';
import { fetchPopularMovies, fetchTopRatedMovies } from '../../Services/service';
import { ContainerList, ImageStyled } from './Home.style';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPopularMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const popularMovies = await fetchPopularMovies();
        setPopularMovies(popularMovies);
        console.log(popularMovies)
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getPopularMovies();
  }, []);

    useEffect(() => {
    const getTopRatedMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const topRatedMovies = await fetchTopRatedMovies();
        setTopRatedMovies(topRatedMovies);
        console.log(topRatedMovies)
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getTopRatedMovies();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <>
    <ContainerList>
      {popularMovies.length > 0 ? (
        popularMovies.map((movie) => (
          <div key={movie.id}>
            <ImageStyled src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          </div>
        ))
      ) : (
        <p>Nenhum filme encontrado.</p>
      )}
    </ContainerList>
    <ContainerList>
        {topRatedMovies.length > 0 ? (
          topRatedMovies.map((movie) => (
            <div key={movie.id}>
              <ImageStyled src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </div>
          ))
        ) : (
          <p>Nenhum filme encontrado.</p>
        )}
      </ContainerList></>
  );
};

export default Home;
