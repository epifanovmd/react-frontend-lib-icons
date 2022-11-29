import React, { FC, memo } from 'react';
import MovieFilterOutlineSvg from '../svg/movie-filter-outline.svg';

export interface IMovieFilterOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieFilterOutlineIcon: FC<IMovieFilterOutlineIconProps> = memo(props => {
  return <MovieFilterOutlineSvg {...props} />;
});
