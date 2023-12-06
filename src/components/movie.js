import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './movie.module.css';

function MovieApp({id, coverImg, title, year, summary, genres}){
    return (
            <div className={styles.movie}>
                    <img src={coverImg} alt={title} className={styles.movie__img} />
                    <div >    
                    <h2 className={styles.movie__title}>
                        <Link to={`movie/${id}`}>{title}</Link>
                    </h2>
                    </div>
                    <h3 className={styles.movie__year}>{year}</h3>
                    <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
                    <ul className={styles.movie_genres}>
                        {genres.map((g, index)=> <li key={index}>{g}</li>)}
                    </ul>
                </div>
    )
}
MovieApp.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default MovieApp;