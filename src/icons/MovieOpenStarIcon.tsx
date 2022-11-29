import React, { FC, memo } from 'react';
import MovieOpenStarSvg from '../svg/movie-open-star.svg';

export interface IMovieOpenStarIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieOpenStarIcon: FC<IMovieOpenStarIconProps> = memo(props => {
  return <MovieOpenStarSvg {...props} />;
});
