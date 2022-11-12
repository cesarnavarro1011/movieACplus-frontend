import { NavDesktop } from "./navDesktop";
import { NavIphone } from "./NavIphone";

import styles from "./module-css/head.module.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Head() {
    return (
    <header>
        <nav className={styles.navbar}>
            <div className={styles.navbar_container+" "+styles.container}>
                <input type="checkbox" name="" id=""/>
                <div className={styles.hamburger_lines}>
                    <span className={styles.line+" "+styles.line1}></span>
                    <span className={styles.line+" "+styles.line2}></span>
                    <span className={styles.line+" "+styles.line3}></span>
                </div>

                <ul className={styles.menu_items}>

                    <a className={styles.a_Movie} href="t">
                        <NavDesktop title="Movie"/>
                    </a>
                    <a className={styles.a_series} href="f">
                        <NavDesktop title="series"/>
                    </a>

                    <a className={styles.a_Movie} href="t">
                        <NavIphone title="Movie"/>
                    </a>
                    <a className={styles.a_series} href="f">
                        <NavIphone title="series"/>
                    </a>
                    
                    <li className={styles.nav_items_opcions +" "+styles.item_account}>Account</li>
                </ul>

                <a href="g" className={styles.linklogo}>
                    <h1 className={styles.logo}>MovieAC+</h1>
                </a>
                
                <input className={styles.search} type="search" placeholder="search"/>
            </div> 
            <input className={styles.search_iphone} type="search" placeholder="search"/>

        </nav>
    </header>
    );
}






