import React, { FC, memo } from 'react';
import MovieOpenMinusSvg from '../svg/movie-open-minus.svg';

export interface IMovieOpenMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieOpenMinusIcon: FC<IMovieOpenMinusIconProps> = memo(props => {
  return <MovieOpenMinusSvg {...props} />;
});
