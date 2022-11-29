import React, { FC, memo } from 'react';
import MovieOutlineSvg from '../svg/movie-outline.svg';

export interface IMovieOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieOutlineIcon: FC<IMovieOutlineIconProps> = memo(props => {
  return <MovieOutlineSvg {...props} />;
});
