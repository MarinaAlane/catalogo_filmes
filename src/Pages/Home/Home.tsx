import { useEffect, useState } from "react";
import { fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies } from "../../Services/service";
import Header from "../../Components/Header/Header";
import MovieList from "../../Components/MovieList/MovieList";

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
        const movies = await fetchPopularMovies();
        setPopularMovies(movies);
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
        const movies = await fetchTopRatedMovies();
        setTopRatedMovies(movies);
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
        const movies = await fetchUpcomingMovies();
        setUpcomingMovies(movies);
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
;

  return (
    <>
      <Header />
      <MovieList title="Populares" movies={popularMovies} />
      <MovieList title="As melhores avaliações" movies={topRatedMovies} />
      <MovieList title="Próximos lançamentos" movies={upcomingMovies} />
    </>
  );
};

export default Home;
