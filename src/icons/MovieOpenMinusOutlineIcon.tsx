import React, { FC, memo } from 'react';
import MovieOpenMinusOutlineSvg from '../svg/movie-open-minus-outline.svg';

export interface IMovieOpenMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieOpenMinusOutlineIcon: FC<IMovieOpenMinusOutlineIconProps> = memo(props => {
  return <MovieOpenMinusOutlineSvg {...props} />;
});
