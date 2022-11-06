import movies from "../movies.json";
import { MovieCard } from "./moviecard";
import styles from "./module-css/grid.module.css";

export default function ListMovies() {
    return (
        <ul className={styles.grid}>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </ul>
    );
}