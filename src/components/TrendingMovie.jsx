import { useState, useEffect } from "react";
const TrendingMovie = ({ movie, index }) => {
    const [homepage, setHomepage] = useState("");
    const API_BASE_URL = "https://api.themoviedb.org/3";

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch(`${API_BASE_URL}/movie/${movie.movie_id}?api_key=5ddf0bbaf0c5311f799c814b94046a3a`);
            const data = await response.json();

            if (data.Response === "False") {
                console.error(data.Error || "Failed to fetch movie details");
                return;
            }

            setHomepage(data.homepage)
        }

        fetchMovies();
    }, []);
    return (
        <li>
            <p>{index + 1}</p>
            <a href={homepage} target="_blank">
                <img src={movie.poster_url} alt={movie.title} />
            </a>
        </li>
    )
}

export default TrendingMovie