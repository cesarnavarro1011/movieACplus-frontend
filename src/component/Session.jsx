import styles from "./module-css/session.module.css";

export default function Session() {
  return (
    <div className={styles.responsive}>
      <header>
          <nav className={styles.nav}>
            <li className={styles.logo}>MovieAC+</li>
          </nav>
      </header>

      <div className={styles.container}>
      <div className={styles.container_session}>
        <div className={styles.content_session}>
          <h2 className={styles.title}>Iniciar Session</h2>
            <div className={styles.content_api}>
                <a className={styles.api+" "+styles.facebook} href="g">facebook</a>
                <a className={styles.api+" "+styles.google} href="g" >Google</a>
            </div>
            <form className={styles.form_session}>
                <div className={styles.inputs}>
                    <input className={styles.input_login} type="text" placeholder="User"></input>
                    <input className={styles.input_login+" "+styles.input_login_down} type="text" placeholder="Password"></input>
                </div>
                <div className={styles.form_button}>
                  <button className={styles.button_login}>Login</button>
                  <button className={styles.button_login}>login in</button>
                </div>
                <div className={styles.ul_opcions_recuperacion}>
                  <a className={styles.a_recuperar} href="3">¿Olvidaste Contraseña?</a>
                </div>
            </form>
        </div>
      </div>
      </div>
  </div>
  );
}