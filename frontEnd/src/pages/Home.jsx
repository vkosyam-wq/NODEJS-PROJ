import MovieCard from "../Components/MovieCard";
import {useState} from "react";
import "../css/Home.css"
function Home(){
    
    const movies =[
        {id: 1, title: "First Movie", release_date: "2020"},
        {id: 2, title: "Second Movie", release_date: "2018"},
        {id: 3, title: "Third Movie", release_date: "2015"}
    ];

    const[searchQ,setSearchQ] = useState("");
    


  

    return (



        
        <div className="home">
            <form className="search-form">
                <input
                
                type="text"
                className="search-input"
                placeHolder="search Movie"
                value={searchQ}
                onChange={(e) => {setSearchQ(e.target.value)}}/>
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