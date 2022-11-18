import { Route, Routes } from "react-router-dom";
import Header from "./component/header";
import ListMovies from "./component/listMovies";
import CardDetails from "./pages/cardDetails";
import NotFound from "./pages/notFound404";
import Session from "./pages/Session";


export default function MovieAC() {
  return (
    <div>
    <Header/>
        <Routes>
              <Route path="movies" element={<ListMovies />}></Route>
              <Route exact path="movies/:movieid" element={<CardDetails />}></Route>
              <Route path="session" element={<Session />}></Route>
              <Route path="*" element={<NotFound />}></Route>
        </Routes>
    </div>
  ); 
}  