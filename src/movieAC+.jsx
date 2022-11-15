import { Route, Routes } from "react-router-dom";
import Header from "./component/header";
import ListMovies from "./component/listMovies";
import CardDetails from "./pages/cardDetails";
import Session from "./pages/Session";

export default function MovieAC() {
  return (
    <div>
      <Header/>
        <Routes>
              <Route exact path="/movies/:id" element={<CardDetails />}></Route>
              <Route path="/movies" element={<ListMovies />}></Route>
              <Route path="/movies" element={<Session />}></Route>
        </Routes>
    </div>
  ); 
}  