import { useEffect, useState } from "react";
const MovieCard = ({
    movie: {
        id,
        title,
        poster_path,
        vote_average,
        release_date,
        original_language
    }
}) => {
    const [homepage, setHomepage] = useState("");
    const API_BASE_URL = "https://api.themoviedb.org/3";

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch(`${API_BASE_URL}/movie/${id}?api_key=5ddf0bbaf0c5311f799c814b94046a3a`);
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
        <div className="movie-card">
            <a href={homepage} target="_blank">
                <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : "/no-movie.png"} alt={title} />
            </a>

            <div className="mt-4">
                <h3>{title}</h3>
                <div className="content">
                    <div className="rating">
                        <img src="./star.svg" alt="Star Icon" />

                        <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
                    </div>

                    <span>•</span>

                    <p className="lang">{original_language}</p>

                    <span>•</span>

                    <p className="year">
                        {release_date ? release_date.split("-")[0] : "N/A"}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MovieCard