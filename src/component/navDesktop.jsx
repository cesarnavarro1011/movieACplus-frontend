import { Link } from "react-router-dom";
import styles from "./comp-css/header.module.css";

export function NavDesktop({ title }) {
    return (
        <li className={styles.nav_items_opcions}>{title}
            <ul className={styles.ul_items}>
                <li className={styles.item+" "+styles.item_action}><Link to="#action" alt="action">action</Link></li>
                <li className={styles.item+" "+styles.item_kinds}><Link to="#kids" alt="kinds">kids</Link></li>
                <li className={styles.item+" "+styles.item_comedy}><Link to="#comedy" alt="comedy">comedy</Link></li>
                <li className={styles.item+" "+styles.item_terror}><Link to="#terror" alt="">terror</Link></li>
                <li className={styles.item+" "+styles.item_suspense}><Link to="#suspense" alt="suspense">suspense</Link></li>
            </ul>
        </li>
    );
}



