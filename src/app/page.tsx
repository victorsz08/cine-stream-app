/* eslint-disable @next/next/no-img-element */
'use client';

//https://image.tmdb.org/t/p/w220_and_h330_face

import { useEffect, useState } from "react";
import api from "./services/api";
import styled from "styled-components";
import { Chart as ChartJS, ArcElement, Tooltip, Legend , SubTitle, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ListMovie from "./components/ListMovie";
import CardMovie from "./components/CardMovie";

ChartJS.register(ArcElement, Tooltip, Legend, SubTitle, Title);


type IMovie = {
  id?: number;
  title: string;
  poster_path: string;
  release_date?: string;
  backdrop_path?: string;
  overview?: string;
  vote_count?: number;
  vote_average?: number;
};

const HomeStyled = styled.main`
  padding: 100px 0;

  .card-movie {
    position: absolute;
    display: flex;
    z-index: 1000;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 8rem;
  }

  .card-movie h1 {
    margin-bottom: 1.5rem;
  }

  .card-movie img {
    height: 400px;
  }

  .chart h4 {
    position: absolute;
    font-size: .7rem;
    color: #FFF;
    transform: translateX(13px) translateY(-40px);
  }

  h3 {
    color: #FFF;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1rem;
    margin-bottom: .6rem;
  }

  .card-movie p {
    margin: 0;
    font-weight: 300;
    font-size: .9rem
  }

  .card-movie p {
    font-size: .9rem;
    font-weight: 400;
  }

  .overview {
    margin: 0 1rem;
  }

  #backdrop-path {
    height: 40rem;
    width: 100vw;
    object-fit: cover;
    filter: brightness(20%);
  }

  
`


export default function Home() {
  const [movie, setMovie] = useState<IMovie>();
  const [percent, setPercent] = useState(0);
  const [moviePopularities, setMoviesPopularities] = useState<IMovie[]>([])

 

  useEffect(() => {
    api.get("movie/upcoming")
      .then(response => {
        setMovie(response.data.results[0]);
        setPercent((response.data.results[0].vote_average / 10) * 100)
      }).catch(error => {
        console.log(error)
      })
  },[]);

  useEffect(() => {
    api.get("movie/popular")
      .then(response => {
        setMoviesPopularities(response.data.results)
        console.log(response.data.results)
      }).catch(error => {
        console.log(error?.response.data)
      })
  },[])

  return (
    <HomeStyled>
      <div className="card-movie">
          <img src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}/>
        <div className="overview">
          <h1>{movie?.title}</h1>
          <h3>Sinopse</h3>
          <p>{movie?.overview}</p>
          <h3>Data de lançamento:</h3>
          <p>{movie?.release_date}</p>
          <h3>Avaliações:</h3>
          <div className="chart">
            <Doughnut data={{
              datasets: [
                {
                  label: '',
                  data: [(movie?.vote_count || 100 / 10) * 100],
                  type: 'doughnut',
                  backgroundColor: percent <= 69 ? '#FFD100' : '#38b000',
                  circumference: 89 / 100 * 360,
                  borderColor: 'transparent',
                  weight: 600
                }
              ]
            }} options={{
              cutout: '88%',
              responsive: false
            }} width={50} height={70}/>
            <h4>{Math.round(percent)}%</h4>
          </div>
        </div>
      </div>
      <img id="backdrop-path" src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}/>
      <ListMovie titleList="Populares" moreInfo="populares">
        {moviePopularities && moviePopularities.map(movieCard => <CardMovie 
        image={`https://image.tmdb.org/t/p/original${movieCard?.poster_path}`} 
        title={movieCard?.title}
        votePercent={movieCard?.vote_average || 0}
        key={movieCard?.id}
        />)}
      </ListMovie>
    </HomeStyled>
  );
}
