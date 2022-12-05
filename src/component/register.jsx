import styles from "../pages/pages.css/session.module.css"

export default function Register ({ isOpen, isClosed}) {


  function stopDefAction(evt) {
    evt.preventDefault();
  }
  
  return (
    <div className={styles.container_register_modal_} style={{display: isOpen ? 'grid' : 'none'}}>
      <div className={styles.subcontainer_register}>
        <div className={styles.container_register_and_closed}>
          <h2 className={styles.text_register}>Registrate</h2>
          <button className={styles.closed} onClick={isClosed}>X</button>
        </div>
        <form className={styles.form_register}>
          <div className={styles.data_person}>
            <label className={styles.label}>Name
            <input className={styles.input_register} type="text" placeholder="nombre"></input></label>
          </div>
          <div className={styles.data_person}>
            <label className={styles.label}>LastName
            <input className={styles.input_register} type="text" placeholder="apellido"></input></label>
          </div>
          <div className={styles.data_person}>
            <label className={styles.label}>User
            <input className={styles.input_register} type="text" placeholder="usuario"></input></label>
          </div>
          <div className={styles.data_person}>
            <label className={styles.label}>Email
            <input className={styles.input_register} type="text" placeholder="correo"></input></label>
          </div>
          <div className={styles.data_person}>
            <label className={styles.label}>Password
            <input className={styles.input_register} type="text" placeholder="contraseña"></input></label>
          </div>
          <div className={styles.data_person}>
            <label className={styles.label}>Repeat-Password
            <input className={styles.input_register} type="text" placeholder="repetir contraseña"></input></label>
          </div>
          <div className={styles.data_person}>
            <label className={styles.label}>Codigo Postal
            <input className={styles.input_register} type="text" placeholder="codigo postal"></input></label>
          </div>
          <div className={styles.data_person}>
            <label className={styles.label}>Contry
            <input className={styles.input_register} type="text" placeholder="pais"></input></label>
          </div>
        <div>
          <p className={styles.termins_and_condicions}>Al hacer clic en "Registrarte", aceptas nuestras Condiciones, la Política de privacidad y la Política de cookies</p>
        </div>
          <button className={styles.button_register}>login in</button>
        </form>
      </div>
    </div>
  );
}