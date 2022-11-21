import { useSearchParams } from "react-router-dom";
import ListMovies from "../component/listMovies";
import { useDebounce } from "../hooks/useDebounce";

export default function Movies() {

  const [query] = useSearchParams();
  const search = query.get("search");
  
  const debouncedSearch = useDebounce(search, 500)
  return (
    <div>
      <ListMovies key={debouncedSearch} search={debouncedSearch}/>
    </div>
  );
}