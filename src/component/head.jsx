import { Nav } from "./nav";
import styles from "./module-css/head.module.css";

export default function Head() {
    return (
    <header>
        <nav className={styles.container_nav}>

            <div className={styles.nav_logo}>ZONE MOVIE</div>
            <ul className={styles.nav_items_center}>
                {/* <a href="" className="a-Movie__zm"> */}
                    <Nav title="movies"/>
                {/* </a> */}
                {/* <a href="" className ="a-series__zm"> */}
                    <Nav title="series"/>
                {/* </a> */}
            </ul>
            <ul className ={styles.nav_items_rigth}>
                <li className={styles.nav_items_opcions +" "+styles.item_search}></li>
                <li className={styles.nav_items_opcions +" "+styles.item_account}></li>
            </ul>
        </nav>
    </header>
    );
}






