import { useEffect, useState} from "react";
import { useSearchParams } from "react-router-dom";
import { get } from "../utils/httpClient";
import { Card } from "./card";
import Loading from "./loading";
import { Empty } from "../pages/empty";

import styles from "./comp-css/grid.module.css";

export default function ListMovies() {

    const [query] = useSearchParams();
    const search = query.get("search");

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        const searchUrl = search 
            ? "/search/movie?query=" + search : "/discover/movie";
        get(searchUrl).then((data) => {
            setMovies(data.results);
            setLoading(false);
        });
    }, [search]);

    if (loading) {
        return <Loading/>;
    }

    if (!loading && movies.length === 0) {
        return <Empty />;
    }

    return (
        <ul className={styles.grid}>
            { movies.map ((movie) => (
                <Card key={movie.id} movie={movie}/>
            ))}
        </ul>
    );
}