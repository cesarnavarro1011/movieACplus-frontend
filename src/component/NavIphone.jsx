import styles from "./module-css/head.module.css";

export function NavIphone({ title }) {
    return (
        <div>
            <input className={styles.search_iphone_menu} type="search" placeholder="search"/>
            <details className={styles.container_menu_iphone}>
                <summary className={styles.nav_items_options_iphone} href="g">{title}</summary>
                <ul className={styles.ul_items_iphone}>
                    <li className={styles.item_iphone}><a href="3">action</a></li>
                    <li className={styles.item_iphone}><a href="3">kids</a></li>
                    <li className={styles.item_iphone}><a href="3">comedy</a></li>
                    <li className={styles.item_iphone}><a href="3">terror</a></li>
                    <li className={styles.item_iphone}><a href="3">action</a></li>
                </ul>
            </details>
        </div>
    );    
}