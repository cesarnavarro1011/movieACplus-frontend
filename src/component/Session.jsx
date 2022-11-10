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
      <div className={styles.master_container}>
        <div className={styles.content_session}>
          <h2 className={styles.title}>Iniciar Session</h2>
            <div className={styles.content_api}>
                <a className={styles.api+" "+styles.facebook} href="g">facebook</a>
                <a className={styles.api+" "+styles.google} href="g" >Google</a>
            </div>
            <form className={styles.form_session}>
                <input className={styles.input_login} type="text" placeholder="User"></input>
                <input className={styles.input_login+" "+styles.input_login_down} type="text" placeholder="Password"></input>
                <div>
                  <button className={styles.button_login}>Login</button>
                  <button className={styles.button_login}>in-login</button>
                </div>
            </form>
        </div>
      </div>
      </div>
  </div>
  );
}