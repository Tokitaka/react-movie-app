import PropTypes from 'prop-types';

function MovieApp({coverImg, title, summary, genres}){
    return (
            <div>
                    <img src={coverImg} alt={title} />
                    <h2><a>{title}</a></h2>
                    <p>{summary}</p>
                    <ul>
                        {genres.map((g)=> <li>{g}</li>)}
                    </ul>
                </div>
    )
}
MovieApp.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default MovieApp;