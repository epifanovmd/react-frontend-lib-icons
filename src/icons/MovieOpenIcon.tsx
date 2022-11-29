import React, { FC, memo } from 'react';
import MovieOpenSvg from '../svg/movie-open.svg';

export interface IMovieOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieOpenIcon: FC<IMovieOpenIconProps> = memo(props => {
  return <MovieOpenSvg {...props} />;
});
