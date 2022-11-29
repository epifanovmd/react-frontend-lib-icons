import React, { FC, memo } from 'react';
import MoviePlayOutlineSvg from '../svg/movie-play-outline.svg';

export interface IMoviePlayOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MoviePlayOutlineIcon: FC<IMoviePlayOutlineIconProps> = memo(props => {
  return <MoviePlayOutlineSvg {...props} />;
});
