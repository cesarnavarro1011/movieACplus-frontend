import styles from "./module-css/head.module.css";

export function NavIphone({ title }) {
    return (
        <details>
            <summary className={styles.nav_items_options_iphone} href="g">{title}</summary>
            <ul className={styles.ul_items_iphone}>
                <li className={styles.item_iphone}><a href="3">action</a></li>
                <li className={styles.item_iphone}><a href="3">kids</a></li>
                <li className={styles.item_iphone}><a href="3">comedy</a></li>
                <li className={styles.item_iphone}><a href="3">terror</a></li>
                <li className={styles.item_iphone}><a href="3">action</a></li>
            </ul>
        </details>
    );    
}