import React, { FC, memo } from 'react';
import MoviePlaySvg from '../svg/movie-play.svg';

export interface IMoviePlayIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MoviePlayIcon: FC<IMoviePlayIconProps> = memo(props => {
  return <MoviePlaySvg {...props} />;
});
