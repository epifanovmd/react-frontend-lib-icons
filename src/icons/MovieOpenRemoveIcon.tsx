import React, { FC, memo } from 'react';
import MovieOpenRemoveSvg from '../svg/movie-open-remove.svg';

export interface IMovieOpenRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieOpenRemoveIcon: FC<IMovieOpenRemoveIconProps> = memo(props => {
  return <MovieOpenRemoveSvg {...props} />;
});
