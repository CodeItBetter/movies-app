import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import MoviesList from "./components/movies/MoviesList";
import MovieContext from "./context/MoviesContext";
import Navbar from "./components/header/Navbar";
import Pagination from "./components/pagination/Pagination";

function App() {
  let { fetchMovies, pg, setError, error} = useContext(MovieContext);
  const [title, setTitle] = useState('');
 

  useEffect(() => {
    setError('');
    async function func(){
      try {
          const response = await axios.get(`https://movies-api-react-app.herokuapp.com/api/movies/${pg}`);
          console.log(response);
          const user = await response.data;
          fetchMovies(user);
          setTitle(user.page.title);
        } catch (error) {
          console.error(error.message);
          setError(error.message);
        }
    }
    func();
  }, [pg]);

 

  return (
    <div>
      <Navbar title={title} />
      <MoviesList />
      {!error && <Pagination />}
    </div>
  );
}

export default App;
