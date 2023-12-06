import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MovieApp({id, coverImg, title, summary, genres}){
    return (
            <div>
                    <img src={coverImg} alt={title} />
                    <h2>
                        <Link to={`movie/${id}`}>{title}</Link>
                        </h2>
                    <p>{summary}</p>
                    <ul>
                        {genres.map((g)=> <li>{g}</li>)}
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