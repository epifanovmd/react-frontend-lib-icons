import React, { FC, memo } from 'react';
import MovieCogOutlineSvg from '../svg/movie-cog-outline.svg';

export interface IMovieCogOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieCogOutlineIcon: FC<IMovieCogOutlineIconProps> = memo(props => {
  return <MovieCogOutlineSvg {...props} />;
});
