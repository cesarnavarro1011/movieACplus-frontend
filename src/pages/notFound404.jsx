import { Link } from "react-router-dom";
import styles from "./pages.css/notFound404.module.css";

export default function NotFound() {
    return (
        <div className={styles.container_notFound}>
            <div className={styles.notFound}>
                <h1 className={styles.title}>Not Found 404</h1>
                <p className={styles.paragraph}>This page no exist or is he off</p>
                <Link to="movies"><button>movies</button></Link>
            </div>
        </div>
    );
}