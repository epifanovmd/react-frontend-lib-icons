import React, { FC, memo } from 'react';
import MovieSvg from '../svg/movie.svg';

export interface IMovieIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieIcon: FC<IMovieIconProps> = memo(props => {
  return <MovieSvg {...props} />;
});
