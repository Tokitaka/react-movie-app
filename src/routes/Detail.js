import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './Detail.module.css';

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        const getMovie = async () => {
            const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
           ).json();
           setMovie(json.data.movie);
           console.log(json);
        };
        setLoading(true);
        getMovie();
        setLoading(false);
    }, [id]);
    console.log(movie);
    return(
        <div>
        {loading ? 
        <h1>Loading... </h1> :
        <div className={styles.movie}>
        <h1 className={styles.movie__title}>{movie.title_long}</h1>
        <img className={styles.movie__img} src={movie.medium_cover_image} alt={movie.title}/>
        <h4 className={styles.movie__rating}>rating : {movie.rating}</h4>
        <h4 className={styles.movie__runtime}>runtime : {movie.runtime} minutes</h4>
        <h4 className={styles.movie__lan}>language : {movie.language}</h4>
        </div>
        }
        </div>
    );
}

export default Detail;