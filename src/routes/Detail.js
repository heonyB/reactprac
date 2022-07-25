import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Dtaile() {
  const [state, setState] = useState('');
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
 

  const movieId = id;

  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`
    );
    const json = await response.json();
 setState(json.data.movie);
    setLoading(false);
    console.log(json);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>로딩중 ...</h1>
      ) : (
        <div>
          <img src={state.small_cover_image} alt={state.title} />
          <h1>{state.title}</h1>
          <p>{state.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Dtaile;
