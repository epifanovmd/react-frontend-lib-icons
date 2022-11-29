import React, { FC, memo } from 'react';
import MovieOffOutlineSvg from '../svg/movie-off-outline.svg';

export interface IMovieOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieOffOutlineIcon: FC<IMovieOffOutlineIconProps> = memo(props => {
  return <MovieOffOutlineSvg {...props} />;
});
