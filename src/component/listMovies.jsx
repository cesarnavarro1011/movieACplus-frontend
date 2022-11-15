import movies from "../movies.json";
import { Card } from "./card";
import styles from "./comp-css/grid.module.css";

export default function ListMovies() {
    return (
        <ul className={styles.grid}>
        
            { movies.map ((movie) => (
                <Card key={movie.id} movie={movie}/>
            ))}
        </ul>
    );
}