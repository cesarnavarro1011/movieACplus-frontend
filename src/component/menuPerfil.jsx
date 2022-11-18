import React from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';

import styles from "./comp-css/menuPerfil.module.css";

export default function CardPerfil({editPerfil,CloseSession}) {
    return (
        <ul className={styles.container_menu_perfil}>
            <li className={styles.container_menu_perfil_list}>
                <div className={styles.container_menu_container_perfil}>
                    <span className={styles.container_menu_perfil_circle}>
                        <img className={styles.img+" "+styles.container_menu_perfil_circle_img} src =""/>
                    </span>
                    <div className={styles.container_menu_edit}>
                        <span className={styles.container_menu_perfil_Name1}>César navarro</span>
                        <Link className={styles.container_menu_perfil_editar_perfil} to="/">Editar Perfil</Link>
                        <p className={styles.container_menu_perfil_type}>User</p>
                    </div>
                </div>
            </li>
        
          {/* <li className={styles.container_menu_perfil_list_option}><img  width="20px" height="20px" src=""/><a className={styles.container_menu_perfil_a} href ="Perreo.php">perreo intensivo ;D</a></li> */}
            <li className={styles.container_menu_perfil_list_option}>
                <object data="f" width="20px" height="20px"></object>
                    <Link className={styles.container_menu_perfil_a} to="/Session">Cerrar Session</Link>
            </li>
        </ul>
    );
}