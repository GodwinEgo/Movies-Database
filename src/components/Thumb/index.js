import React from "react";

import { Image } from "./Thumb.styles";



const Thumb = ( { img, movieId, clickable } ) => (
  <div>
    <Image src={ img } alt='movie-thumb' />
    <div>
      { movieId }
    </div>
  </div>
);

export default Thumb;