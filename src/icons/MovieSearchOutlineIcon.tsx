import React, { FC, memo } from 'react';
import MovieSearchOutlineSvg from '../svg/movie-search-outline.svg';

export interface IMovieSearchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieSearchOutlineIcon: FC<IMovieSearchOutlineIconProps> = memo(props => {
  return <MovieSearchOutlineSvg {...props} />;
});
