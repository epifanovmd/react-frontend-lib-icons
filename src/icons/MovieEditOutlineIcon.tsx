import React, { FC, memo } from 'react';
import MovieEditOutlineSvg from '../svg/movie-edit-outline.svg';

export interface IMovieEditOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieEditOutlineIcon: FC<IMovieEditOutlineIconProps> = memo(props => {
  return <MovieEditOutlineSvg {...props} />;
});
