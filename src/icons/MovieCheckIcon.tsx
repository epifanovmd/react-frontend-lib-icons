import React, { FC, memo } from 'react';
import MovieCheckSvg from '../svg/movie-check.svg';

export interface IMovieCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieCheckIcon: FC<IMovieCheckIconProps> = memo(props => {
  return <MovieCheckSvg {...props} />;
});
