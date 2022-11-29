import React, { FC, memo } from 'react';
import MovieOpenCheckOutlineSvg from '../svg/movie-open-check-outline.svg';

export interface IMovieOpenCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieOpenCheckOutlineIcon: FC<IMovieOpenCheckOutlineIconProps> = memo(props => {
  return <MovieOpenCheckOutlineSvg {...props} />;
});
