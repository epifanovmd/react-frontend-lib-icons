import React, { FC, memo } from 'react';
import MovieOpenOffOutlineSvg from '../svg/movie-open-off-outline.svg';

export interface IMovieOpenOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieOpenOffOutlineIcon: FC<IMovieOpenOffOutlineIconProps> = memo(props => {
  return <MovieOpenOffOutlineSvg {...props} />;
});
