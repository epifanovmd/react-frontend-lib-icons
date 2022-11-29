import React, { FC, memo } from 'react';
import MovieOpenEditOutlineSvg from '../svg/movie-open-edit-outline.svg';

export interface IMovieOpenEditOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieOpenEditOutlineIcon: FC<IMovieOpenEditOutlineIconProps> = memo(props => {
  return <MovieOpenEditOutlineSvg {...props} />;
});
