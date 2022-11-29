import React, { FC, memo } from 'react';
import MovieFilterSvg from '../svg/movie-filter.svg';

export interface IMovieFilterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieFilterIcon: FC<IMovieFilterIconProps> = memo(props => {
  return <MovieFilterSvg {...props} />;
});
