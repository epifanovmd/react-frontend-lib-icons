import React, { FC, memo } from 'react';
import MovieOpenPlaySvg from '../svg/movie-open-play.svg';

export interface IMovieOpenPlayIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieOpenPlayIcon: FC<IMovieOpenPlayIconProps> = memo(props => {
  return <MovieOpenPlaySvg {...props} />;
});
