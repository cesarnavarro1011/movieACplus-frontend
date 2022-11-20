import { Link } from "react-router-dom";
import { NavDesktop } from "./navDesktop";
import { NavIphone } from "./NavIphone";
import CardPerfil from "./menuPerfil";

import styles from "./comp-css/header.module.css";
import SearchDesktop from "./searchDesktop";

export default function Header() {
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
        
                        <Link className={styles.a_Movie} to="movie">
                            <NavDesktop title="Movie"/>
                        </Link>
                        <Link className={styles.a_series} to="">
                            <NavDesktop title="series"/>
                        </Link>
        
                            <NavIphone title="Movie"/>
                            <NavIphone title="series"/>
                        <Link to="/" >
                            <li className={styles.nav_items_opcions+" "+styles.item_account}>Account
                            </li>
                                <CardPerfil/>
                        </Link>
                    </ul>
        
                    <Link to="/movies" className={styles.linklogo}>
                        <h1 className={styles.logo}>MovieAC+</h1>
                    </Link>
                        <SearchDesktop />
                </div> 
            </nav>
        </header>
    );
}






