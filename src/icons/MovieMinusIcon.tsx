import React, { FC, memo } from 'react';
import MovieMinusSvg from '../svg/movie-minus.svg';

export interface IMovieMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieMinusIcon: FC<IMovieMinusIconProps> = memo(props => {
  return <MovieMinusSvg {...props} />;
});
