import styles from "./module-css/menuPerfil.module.css";

export default function CardPerfil() {
    return (
        <ul className={styles.container_menu_perfil}>
            <li className={styles.container_menu_perfil_list}>
                <div className={styles.container_menu_container_perfil}>
                    <span className={styles.container_menu_perfil_circle}>
                        <img className={styles.img+" "+styles.container_menu_perfil_circle_img} src =""/>
                    </span>
                    <div className={styles.container_menu_edit}>
                        <span className={styles.container_menu_perfil_Name1}>César navarro</span>
                        <a className={styles.container_menu_perfil_editar_perfil} href ="Perfil.php">Editar Perfil</a>
                        <p className={styles.container_menu_perfil_type} href ="c">User</p>
                    </div>
                </div>
            </li>

          {/* <li className={styles.container_menu_perfil_list_option}><img  width="20px" height="20px" src=""/><a className={styles.container_menu_perfil_a} href ="Perreo.php">perreo intensivo ;D</a></li> */}
            <li className={styles.container_menu_perfil_list_option}><object data="f" width="20px" height="20px"></object><a className={styles.container_menu_perfil_a} href ="exit_session.php">Cerrar Session</a></li>
        </ul>
    );
}