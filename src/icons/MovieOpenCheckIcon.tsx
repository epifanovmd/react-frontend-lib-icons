import React, { FC, memo } from 'react';
import MovieOpenCheckSvg from '../svg/movie-open-check.svg';

export interface IMovieOpenCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieOpenCheckIcon: FC<IMovieOpenCheckIconProps> = memo(props => {
  return <MovieOpenCheckSvg {...props} />;
});
