import MovieCard from "../Components/MovieCard";


function Home(){
    
    const movies =[
        {id: 1, title: "First Movie", release_date: "2020"},
        {id: 2, title: "Second Movie", release_date: "2018"}
    ]
    


  

    return (



        
        <MovieCard movie={movies[0]}></MovieCard>
    
    )

}
export default Home;