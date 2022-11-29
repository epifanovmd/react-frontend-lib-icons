import React, { FC, memo } from 'react';
import MovieStarSvg from '../svg/movie-star.svg';

export interface IMovieStarIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieStarIcon: FC<IMovieStarIconProps> = memo(props => {
  return <MovieStarSvg {...props} />;
});
