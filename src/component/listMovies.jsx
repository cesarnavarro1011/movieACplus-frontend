import {useEffect, useState } from "react"
import { get } from "../utils/httpClient";
import { Card } from "./card";

import styles from "./comp-css/grid.module.css";

export default function ListMovies() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        get("/discover/movie").then((data) => {
            setMovies(data.results);
        });
    }, []);

    return (
        <ul className={styles.grid}>
        
            { movies.map ((movie) => (
                <Card key={movie.id} movie={movie}/>
            ))}
        </ul>
    );
}