import styles from "./comp-css/loading.module.css"

export default function Loading() {
	return (
		<div className={styles.container}>
    		  <div className={styles.wrapper}>
    			<div className={styles.circle}></div>
    			<div className={styles.circle}></div>
    			<div className={styles.circle}></div>
    			<div className={styles.shadow}></div>
    			<div className={styles.shadow}></div>
    			<div className={styles.shadow}></div>
    		</div>
		</div>
	);
}