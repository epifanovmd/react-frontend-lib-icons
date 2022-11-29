import React, { FC, memo } from 'react';
import MovieOffSvg from '../svg/movie-off.svg';

export interface IMovieOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieOffIcon: FC<IMovieOffIconProps> = memo(props => {
  return <MovieOffSvg {...props} />;
});
