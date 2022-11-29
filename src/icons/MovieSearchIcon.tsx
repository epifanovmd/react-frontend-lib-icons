import React, { FC, memo } from 'react';
import MovieSearchSvg from '../svg/movie-search.svg';

export interface IMovieSearchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieSearchIcon: FC<IMovieSearchIconProps> = memo(props => {
  return <MovieSearchSvg {...props} />;
});
