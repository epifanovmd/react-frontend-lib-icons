import React, { FC, memo } from 'react';
import MovieOpenEditSvg from '../svg/movie-open-edit.svg';

export interface IMovieOpenEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieOpenEditIcon: FC<IMovieOpenEditIconProps> = memo(props => {
  return <MovieOpenEditSvg {...props} />;
});
