import { useSearchParams } from "react-router-dom";
import styles from "./comp-css/search.module.css";

export default function Search() {

  const [query, setQuery] = useSearchParams();
  const search = query.get("search");

  const handleSubmit = (e) => {  
      e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className={styles.search} 
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