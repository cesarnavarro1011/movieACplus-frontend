import { useSearchParams } from "react-router-dom";
import ListMovies from "../component/listMovies";
import Header from "../component/header";

export default function Movies() {

  const [query] = useSearchParams();
  const search = query.get("search");

  return (
    <div>
      <ListMovies key={search}/>
    </div>
  );
}