import React, { FC, memo } from 'react';
import MovieOpenCogSvg from '../svg/movie-open-cog.svg';

export interface IMovieOpenCogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieOpenCogIcon: FC<IMovieOpenCogIconProps> = memo(props => {
  return <MovieOpenCogSvg {...props} />;
});
