import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// async function getMovies() {
//   try {
//     const response = await fetch(
//       `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
//     );

//     const json = await response.json();
//      setMovies(json.data.data.movies);
//     setLoding(false);
//   } catch (err) {
//     console.log(err);
//   }
// }

// useEffect(() => {
//   getMovies();
// }, []);
// console.log(movies);
