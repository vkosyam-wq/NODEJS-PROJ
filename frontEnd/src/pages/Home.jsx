import MovieCard from "../Components/MovieCard";
import {useState,useEffect} from "react";
import{ getPopularMovies,searchMovies } from "../services/api";
import "../css/Home.css"
function Home(){
    
    

    const[searchQ,setSearchQ] = useState("");
    const[movies,setMovies] = useState([]);
    const[error,setError] = useState(null);
    const[loading,setLoading] = useState(true);

    

    useEffect(() =>{
        const loadPopularMovies = async () =>{
            try{

                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            }
            catch(err)
            {
                console.log(err);
                setError("An error occured");

            }
            finally{
                setLoading(false);


            }

        }
        loadPopularMovies();
        
    }, [])


    const handleSearch = (e) =>
    {
        e.preventDefault();
        alert(searchQ);
        setSearchQ("");
    }

    return (



        
        <div className="home">
            <form onsubmit={handleSearch} className="search-form">
                <input
                
                type="text"
                className="search-input"
                placeHolder="search Movie"
                value={searchQ}
                onChange={(e) => setSearchQ(e.target.value)} />
                <button className="search-button" type="submit">Submit</button>
            </form>
            
            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie = {movie} key={movie.id}></MovieCard>
                ))};
                
            </div>
        </div>
    
    )

}
export default Home;