import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ medium_cover_image, title, summary, genres, id }) {
  return (
    <div>
      <img src={medium_cover_image} alt={title}></img>
      <h2>
        <Link to={`/movie/${id}`}> {title} </Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.prototype = {
  id: propTypes.number.isRequired,
  medium_cover_image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.array.isRequired,
};

export default Movie;
