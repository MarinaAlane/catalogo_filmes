import { useEffect, useState } from 'react';
import { fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies } from '../../Services/service';
import { ContainerList, ImageStyled, TitleList } from './Home.style';
import Header from '../../Components/Header/Header';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
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

  useEffect(() => {
    const getUpcomingMovies = async () => {
      setLoading(true);
      setError(null);
    try {
      const upcomingMovies = await fetchUpcomingMovies();
      setUpcomingMovies(upcomingMovies);
      console.log(upcomingMovies)
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

    getUpcomingMovies();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <>
    <Header />
    <TitleList>Populares</TitleList>
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
    <TitleList> As melhores avaliações</TitleList>
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
      </ContainerList>
      <TitleList>Próximos lançamentos</TitleList>
      <ContainerList>
        {upcomingMovies.length > 0 ? (
          upcomingMovies.map((movie) => (
            <div key={movie.id}>
              <ImageStyled src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </div>
          ))
        ) : (
          <p>Nenhum filme encontrado.</p>
        )}
      </ContainerList>
    </>
  );
};

export default Home;
