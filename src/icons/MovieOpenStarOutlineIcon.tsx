import React, { FC, memo } from 'react';
import MovieOpenStarOutlineSvg from '../svg/movie-open-star-outline.svg';

export interface IMovieOpenStarOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieOpenStarOutlineIcon: FC<IMovieOpenStarOutlineIconProps> = memo(props => {
  return <MovieOpenStarOutlineSvg {...props} />;
});
