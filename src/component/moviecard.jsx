import styles from "./module-css/moviecard.module.css";

export function MovieCard({movie}) {
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
            <div className={styles.container_cards}>
                <div className={styles.card}> 
                    <img class={styles.card_img} src={imageUrl} alt={movie.title}/>
                    <div className={styles.card_info}>
                        <p className={styles.text_title}>{movie.title}</p>
                        <p className={styles.gener}>fantasy</p>
                        <span className={styles.text_title +" "+ styles.score}>{movie.vote_average}</span>
                        <span className={styles.release_date}>{movie.release_date}</span>
                    </div>
                </div>
            </div> 
    );
} 