import React, { FC, memo } from 'react';
import MovieOpenOffSvg from '../svg/movie-open-off.svg';

export interface IMovieOpenOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieOpenOffIcon: FC<IMovieOpenOffIconProps> = memo(props => {
  return <MovieOpenOffSvg {...props} />;
});
