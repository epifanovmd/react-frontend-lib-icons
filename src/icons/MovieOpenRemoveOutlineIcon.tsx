import React, { FC, memo } from 'react';
import MovieOpenRemoveOutlineSvg from '../svg/movie-open-remove-outline.svg';

export interface IMovieOpenRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieOpenRemoveOutlineIcon: FC<IMovieOpenRemoveOutlineIconProps> = memo(props => {
  return <MovieOpenRemoveOutlineSvg {...props} />;
});
