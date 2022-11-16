import { Link } from "react-router-dom";
import styles from "./comp-css/header.module.css";

export function NavIphone({ title }) {
    return (
        <div>
            <input className={styles.search_iphone_menu} type="search" placeholder="search"/>
            <details className={styles.container_menu_iphone}>
                <summary className={styles.nav_items_options_iphone} href="g">{title}</summary>
                <ul className={styles.ul_items_iphone}>
                    <li className={styles.item_iphone}><Link to="3">action</Link></li>
                    <li className={styles.item_iphone}><Link to="3">kids</Link></li>
                    <li className={styles.item_iphone}><Link to="3">comedy</Link></li>
                    <li className={styles.item_iphone}><Link to="3">terror</Link></li>
                    <li className={styles.item_iphone}><Link to="3">suspense</Link></li>
                </ul>
            </details>
        </div>
    );    
}