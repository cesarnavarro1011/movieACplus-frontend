import { Link } from "react-router-dom";
import movies from "../movies.json";

import styles from "./pages.css/cardDetails.module.css"

export default function CardDetails({movie}) {
  // const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

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
                        {/* <video src="video.mp4" width="640" height="480"></video> */}
                    </div>

                    <div className={styles.container_info}>
                        <div className={styles.container_img}>
                        {/* <img className={styles.img} src={imageUrl} alt={movie.title}/> */}
                            <img className={styles.img} src="" alt=""/>
                        </div>

                        <div className={styles.description}>
                            <h1 className={styles.title}>Title</h1>
                            <p>
                            lorem awwagagagahashadhah
                            hahdhdahhahdagsagasgasgag
                            safsa fsafagsagagagasgsag
                            sgagasgasgsagsagagagsgagg
                            sagasgsagsagasgsagsgagasg
                            sgsagasgsgsagasgsgagsagsa
                            asgsagagagasgasgagaggsgaa
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}