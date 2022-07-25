import { useEffect, useState } from 'react';

import Movie from '../components/Movie';

const axios = require('axios');

function Home() {
  const [loding, setLoding] = useState(true);
  const [movies, setMovies] = useState([]);

  async function loadData() {
    try {
      const response = await axios.get(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      );
      setMovies(response.data.data.movies);
      setLoding(false);
    } catch (e) {
      console.log('axios get Error');
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      {loding ? (
        <h1>로딩중 ..</h1>
      ) : (
        <div>
          {' '}
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              medium_cover_image={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
