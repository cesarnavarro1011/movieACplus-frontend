import Head from "./component/head";
import Front from "./component/front";
import ListMovies from "./component/listMovies";

export default function MovieAC() {
  return (
    <div>
        <Head/>
        <Front/>
        <ListMovies/>
    </div>
  );
}