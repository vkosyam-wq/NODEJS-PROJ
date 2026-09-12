const API_KEY = "c99a2b086e0222db42e0e0db2f197b5d";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
    
}




export const searchMovies = async (query) =>{
    const request = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await request.json();
    return data.results;
}