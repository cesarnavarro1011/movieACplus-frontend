import styles from "./module-css/head.module.css";

export function Nav({ title }) {
    return (
        <li className={styles.nav_items_opcions}>{title}
            <ul className={styles.ul_items}>
                <li className={styles.item+" "+styles.item_action}>action</li>
                <li className={styles.item+" "+styles.item_kinds}>kinds</li>
                <li className={styles.item+" "+styles.item_comedy}>comedy</li>
                <li className={styles.item+" "+styles.item_terror}>terror</li>
                <li className={styles.item+" "+styles.item_suspense}>suspense</li>
            </ul>
        </li>
    );
}
