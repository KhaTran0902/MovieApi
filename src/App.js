import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import MovieList from "./movieList/MovieList";
import "./App.css"
import MovieDetail from "./pages/moviedetails/MovieDetail";
export default function App() {
  return (
    <div className="App">
      <Header/>
       <Routes>
        <Route index element={<Home/>} />
        <Route path="/" element={<h1>Error Page</h1>}></Route>
        <Route path="movies/:type" element={<MovieList/>}></Route>
        <Route path="movie/:id" element={<MovieDetail/>}></Route>
       </Routes>
    </div>
  );
}
   