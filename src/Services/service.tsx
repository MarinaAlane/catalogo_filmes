const optionsGet = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTdjYWQyZWYxMGFjMGZmZWU2YjAwMDllZjllNmI4OCIsIm5iZiI6MTczOTM4MzcyMC4xNzgsInN1YiI6IjY3YWNlM2E4MTE2OGRlZGExMDlmMzJjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7NZ1wRCwz4BSv3PkX9yTEeBefrrKfJf8dPNuTwdT47o'
  }
};

export const fetchPopularMovies = async () => {
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', optionsGet);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results; 
    } catch (error) {
    console.error('Erro ao buscar filmes populares:', error);
    return [];
  }
};

export const fetchTopRatedMovies = async () => {
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', optionsGet);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results; 
    } catch (error) {
    console.error('Erro ao buscar filmes populares:', error);
    return [];
  }
};