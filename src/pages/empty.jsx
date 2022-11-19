import { BsEmojiFrown } from "react-icons/bs";
import styles from "../pages/pages.css/Empty.module.css";

export function Empty() {
  return (
    <div className={styles.container_empty}>
      <div className={styles.empty}>No Results<BsEmojiFrown className={styles.emoji}/></div>
    </div>
    );
}