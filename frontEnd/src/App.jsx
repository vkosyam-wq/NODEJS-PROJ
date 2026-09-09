
import './App.css'

import MovieCard from './Components/MovieCard'

function App() {

  return (
    <>
      <MovieCard movie = {{title: "Tim's Film", release_date: "2024"}}></MovieCard>
      <MovieCard movie = {{title: "Joe's Film", release_date: "2023"}}></MovieCard>
    </>
  );
}



export default App;
