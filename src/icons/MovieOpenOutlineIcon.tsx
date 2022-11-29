import React, { FC, memo } from 'react';
import MovieOpenOutlineSvg from '../svg/movie-open-outline.svg';

export interface IMovieOpenOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieOpenOutlineIcon: FC<IMovieOpenOutlineIconProps> = memo(props => {
  return <MovieOpenOutlineSvg {...props} />;
});
