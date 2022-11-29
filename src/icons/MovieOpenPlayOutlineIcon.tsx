import React, { FC, memo } from 'react';
import MovieOpenPlayOutlineSvg from '../svg/movie-open-play-outline.svg';

export interface IMovieOpenPlayOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieOpenPlayOutlineIcon: FC<IMovieOpenPlayOutlineIconProps> = memo(props => {
  return <MovieOpenPlayOutlineSvg {...props} />;
});
