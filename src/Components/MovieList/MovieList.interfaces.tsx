export interface IMovieList {
  title: string;
  movies: IMovie[];
  onImageClick: (movie: IMovie) => void;
  selectedMovie: IMovie | null;
  direction: string;
}

export interface IMovie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
};

export interface ScrollButtonProps {
  direction: "left" | "right";
}