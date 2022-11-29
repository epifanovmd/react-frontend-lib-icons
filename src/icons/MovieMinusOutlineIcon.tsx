import React, { FC, memo } from 'react';
import MovieMinusOutlineSvg from '../svg/movie-minus-outline.svg';

export interface IMovieMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieMinusOutlineIcon: FC<IMovieMinusOutlineIconProps> = memo(props => {
  return <MovieMinusOutlineSvg {...props} />;
});
