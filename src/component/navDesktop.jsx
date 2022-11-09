import styles from "./module-css/head.module.css";

export function NavDesktop({ title }) {
    return (
        <li className={styles.nav_items_opcions}>{title}
            <ul className={styles.ul_items}>
                <li className={styles.item+" "+styles.item_action}><a href="#action" alt="action">action</a></li>
                <li className={styles.item+" "+styles.item_kinds}><a href="#kids" alt="kinds">kids</a></li>
                <li className={styles.item+" "+styles.item_comedy}><a href="#comedy" alt="comedy">comedy</a></li>
                <li className={styles.item+" "+styles.item_terror}><a href="#terror" alt="">terror</a></li>
                <li className={styles.item+" "+styles.item_suspense}><a href="#suspense" alt="suspense">suspense</a></li>
            </ul>
        </li>
    );
}



