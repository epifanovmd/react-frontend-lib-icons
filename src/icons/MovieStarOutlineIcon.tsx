import React, { FC, memo } from 'react';
import MovieStarOutlineSvg from '../svg/movie-star-outline.svg';

export interface IMovieStarOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieStarOutlineIcon: FC<IMovieStarOutlineIconProps> = memo(props => {
  return <MovieStarOutlineSvg {...props} />;
});
