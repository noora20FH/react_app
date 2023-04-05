// import logo from './logo.svg';
import {useEffect} from 'react';
import './App.css';
import SearchIcon from './search.svg'

//key: b7b158ef
const API_URL = 'http://www.omdbapi.com?apikey=b7b158ef';
// we can use thet inside our component to gather the data

const movie1 ={
  "Title": 'Amazing Spiderman Syndrom',
  "Year": '2012',
  "imdbID":'tt2586634',
  "Type": 'movie',
  "Poster": 'N/A'

}


function App() {
  const searchMovies = async (title) => {
    //call the API
    const response = await fetch(`${API_URL}&s${title}`);
    //get the data from it
    const data = await response.json();
    //the data about the movie
    console.log(data.Search);

  }
  useEffect(() => {
    //call the search movie. add the title
    searchMovies('Spiderman');

  }, []);

  return (
    // wrap everything inside <div>
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input 
          placeholder="Search for movies"
          // static string
          value="Superman"
            /* callback function */
          onChange={() => {}}
        />
        <img
        src={SearchIcon}
        alt="search"
        onClick={() => {}}/>
       


      </div>

      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>

          <div>
            <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}></img>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
