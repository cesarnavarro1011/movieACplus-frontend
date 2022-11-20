import { useSearchParams } from "react-router-dom";
import styles from "./comp-css/searchIphone.module.css";

export default function SearchIphone() {

  const [query, setQuery] = useSearchParams();
  const search = query.get("search");

  const handleSubmit = (e) => {  
      e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className={styles.search_iphone_menu} 
        type="search" 
        value={search ?? ""}
        onChange={(e) => {
          const value = e.target.value; 
          setQuery({ search: value });
          }} 
        placeholder="search"/>
    </form>
  );
}