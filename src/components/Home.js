import React from "react";
//API
import API from '../API'
//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
//components
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";
//Hook
import { useHomeFetch } from '../Hooks/useHomeFetch';
//Image
import NoImage from '../images/no_image.jpg';

const Home = () =>
{
  const { state, loading, error } = useHomeFetch();

  console.log( state );


  return (
    <>
      { state.results[ 0 ] ? (
        <HeroImage
          image={ `${ IMAGE_BASE_URL }${ BACKDROP_SIZE }` }
          title={ state.results[ 0 ].original_title }
          text={ state.results[ 0 ].overview }
        />
      ) : null }
      <Grid header='Popular Movies'>
        { state.results.map( movie => (
          <Thumb
            key={ movie.id }
            clickable
            img={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={ movie.id }
          />
        ) ) }
      </Grid>
    </>
  );
};


export default Home;