import React, { FC, memo } from 'react';
import MoviePlusSvg from '../svg/movie-plus.svg';

export interface IMoviePlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MoviePlusIcon: FC<IMoviePlusIconProps> = memo(props => {
  return <MoviePlusSvg {...props} />;
});
