import React, { FC, memo } from 'react';
import MovieOpenCogOutlineSvg from '../svg/movie-open-cog-outline.svg';

export interface IMovieOpenCogOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieOpenCogOutlineIcon: FC<IMovieOpenCogOutlineIconProps> = memo(props => {
  return <MovieOpenCogOutlineSvg {...props} />;
});
