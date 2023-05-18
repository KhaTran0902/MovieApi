import axios from "axios";
import { useState, useEffect } from "react";
import Cards from "../components/card/Card";
import "./MovieList.css"
import { useParams } from "react-router-dom";
export default function MovieList() {
  const [movieslist, setMoviesList] = useState([]);
  const {type} = useParams();
  const getData = async () => {
    const url = `https://api.themoviedb.org/3/movie/${type ? type :"popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setMoviesList(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(()=> {
    getData();
  }, [type])
  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type :"Popular").toUpperCase()}</h2>
      <div className="list__cards">
        {
          movieslist.map((movie, index) => <Cards key={index} movie={movie} />)}
      </div>
    </div>
  );
}
