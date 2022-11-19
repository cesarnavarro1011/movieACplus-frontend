import { get } from "../utils/httpClient";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiUsers } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { RiMovie2Fill } from "react-icons/ri";
import { BsCalendar3 } from "react-icons/bs";
import { IoLanguage } from "react-icons/io5";
import Loading from "../component/loading";

import styles from "./pages.css/cardDetails.module.css"

export default function CardDetails() {

    const { movieid } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(()=>{
        setLoading(true);
        get("/movie/" + movieid).then(data=> {
            setLoading(false);
            setMovie(data);
        })
    }, [movieid])  
    
    if (loading) {
        return <Loading/>;
    }

    if (!movie) {
        return null;
    }
    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

    return (
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <div className={styles.container_movie}>
                <div className={styles.opcions}>
                    <Link className={styles.opcion+" "+ styles.opcion_left } to="opcion-1" alt="apcion-1">Opcion 1</Link>
                    <Link className={styles.opcion} to="opcion-2" alt="apcion-2">Opcion 2</Link>
                    <Link className={styles.opcion} to="opcion-3" alt="apcion-3">Opcion 3</Link>
                    <Link className={styles.opcion+" "+ styles.opcion_rigth } to="opcion-4" alt="apcion-4">Opcion 4</Link>
                </div>

                    <div className={styles.video_movie}>
                        {/* <video src="video.mp4" width="640" height="40"></video> */}
                    </div>

                    <div className={styles.container_info}>
                        <div className={styles.container_img}>
                            <img className={styles.img} src={imageUrl} alt=""/>
                        </div>

                        <div className={styles.description}>
                            <h1 className={styles.title}>{movie.title}</h1>

                                <IoLanguage className={styles.Language}/>{movie.original_language}
                                <RiMovie2Fill className={styles.genre}/>{movie.genre}
                                <AiFillStar className={styles.star}/>{movie.vote_average}
                                <HiUsers className={styles.populary}/>{movie.popularity}
                                <BsCalendar3 className={styles.calendar}/>{movie.release_date}
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}