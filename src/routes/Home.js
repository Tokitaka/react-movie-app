import { useState, useEffect } from "react";
import Movie from "../components/movie";
import styles from './Home.module.css';

function Home() {
    const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  
  const getMovies = async () => {
      const json = await (
        await fetch(
          "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
          )
          ).json();
      setMovies(json.data.movies);
      setLoading(false);
  };

  useEffect(()=> {getMovies()}, []);

  return (
    <div>
      <div className={styles.container}>
        { loading ? 
        <strong>Loading...</strong>
         : 
         <div className={styles.movies}>{movies.map((movie)=> 
         <Movie key={movie.id}
          id={movie.id}
          coverImg={movie.medium_cover_image} 
          year={movie.year} 
          title={movie.title}
          summary={movie.summary}
          genres={movie.genres}
          />)
          }</div>
         }
         </div>
    </div>
  );

}

export default Home;