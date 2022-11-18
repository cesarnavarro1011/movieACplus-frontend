import {useEffect, useState } from "react"
import { get } from "../utils/httpClient";
import { Card } from "./card";
import Loading from "./loading";
import styles from "./comp-css/grid.module.css";

export default function ListMovies() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        get("/discover/movie").then((data) => {
            setLoading(false);
            setMovies(data.results);
        });
    }, []);

    if (loading) {
        return <Loading/>;
    }

    return (
        <ul className={styles.grid}>
        
            { movies.map ((movie) => (
                <Card key={movie.id} movie={movie}/>
            ))}
        </ul>
    );
}