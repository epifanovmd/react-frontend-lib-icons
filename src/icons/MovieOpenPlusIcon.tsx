import React, { FC, memo } from 'react';
import MovieOpenPlusSvg from '../svg/movie-open-plus.svg';

export interface IMovieOpenPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieOpenPlusIcon: FC<IMovieOpenPlusIconProps> = memo(props => {
  return <MovieOpenPlusSvg {...props} />;
});
