import React, { FC, memo } from 'react';
import MovieCheckOutlineSvg from '../svg/movie-check-outline.svg';

export interface IMovieCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieCheckOutlineIcon: FC<IMovieCheckOutlineIconProps> = memo(props => {
  return <MovieCheckOutlineSvg {...props} />;
});
