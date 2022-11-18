import { Link } from "react-router-dom";
import styles from "./comp-css/card.module.css";
import { AiFillStar } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";

export function Card({movie}) {
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
        <Link className={styles.link_card_movies} to={"/movies/" + movie.id}>
            <div className={styles.container_cards}>
                <div className={styles.card}> 
                    <img className={styles.card_img} src={imageUrl} alt={movie.title}/>
                    <div className={styles.card_info}>
                        <p className={styles.text_title}>{movie.title}</p>
                        <p className={styles.gender}>fantasy</p>
                        <span className={styles.text_title +" "+styles.score}>{movie.vote_average}
                            <AiFillStar className={styles.star}/>
                        </span>
                        <BsCalendar3 className={styles.calendar}/>
                        <span className={styles.release_date}>{movie.release_date}</span>
                    </div>
                </div>
            </div> 
        </Link>
    );
} 