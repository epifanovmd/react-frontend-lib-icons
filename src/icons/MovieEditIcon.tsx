import React, { FC, memo } from 'react';
import MovieEditSvg from '../svg/movie-edit.svg';

export interface IMovieEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieEditIcon: FC<IMovieEditIconProps> = memo(props => {
  return <MovieEditSvg {...props} />;
});
