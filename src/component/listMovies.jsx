import { useEffect, useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { get } from "../utils/httpClient";
import { Card } from "./card";
import Loading from "./loading";
import { Empty } from "../pages/empty";
import styles from "./comp-css/grid.module.css";

export default function ListMovies({search}) {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(1);
    const [hasMore, sethasMore] = useState(true);

    useEffect(() => {
        setLoading(true);
        const searchUrl = search 
            ? "/search/movie?query=" + search + "&page=" + page
            : "/discover/movie?page=" + page;
            
        get(searchUrl).then((data) => {
            setMovies((previMovies) => previMovies.concat(data.results));
            sethasMore(data.page < data.total_pages);
            setLoading(false);
        });
    }, [search, page]);

    if (!loading && movies.length === 0) {
        return <Empty />;
    }

    return (
        <InfiniteScroll 
            dataLength={movies.length}
            next={() => setPage((prevPage) => prevPage + 1)}
            hasMore={hasMore}
            loader={<Loading/>}
            >
            <ul className={styles.grid}>
                { movies.map ((movie) => (
                    <Card key={movie.id} movie={movie}/>
                ))}
            </ul>
        </InfiniteScroll>
    );
}