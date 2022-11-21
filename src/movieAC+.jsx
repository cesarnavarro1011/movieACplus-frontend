import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./component/header";
import Movies from "./pages/movies";
import CardDetails from "./pages/cardDetails";
import NotFound from "./pages/notFound404";
import Session from "./pages/Session";


export default function MovieAC() {
  return (
    <div>
    <Header/>
        <Routes>
              <Route path="/movies" element={<Movies />}/>
              <Route exact path="movies/:movieid" element={<CardDetails />}/>
              <Route path="session" element={<Session />}/>
              <Route path="*" element={<NotFound />}/>
              <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    </div>
  ); 
}  