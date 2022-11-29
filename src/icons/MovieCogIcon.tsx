import React, { FC, memo } from 'react';
import MovieCogSvg from '../svg/movie-cog.svg';

export interface IMovieCogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieCogIcon: FC<IMovieCogIconProps> = memo(props => {
  return <MovieCogSvg {...props} />;
});
