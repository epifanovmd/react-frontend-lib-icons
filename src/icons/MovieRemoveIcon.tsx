import React, { FC, memo } from 'react';
import MovieRemoveSvg from '../svg/movie-remove.svg';

export interface IMovieRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieRemoveIcon: FC<IMovieRemoveIconProps> = memo(props => {
  return <MovieRemoveSvg {...props} />;
});
