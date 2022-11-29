import React, { FC, memo } from 'react';
import MovieRollSvg from '../svg/movie-roll.svg';

export interface IMovieRollIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieRollIcon: FC<IMovieRollIconProps> = memo(props => {
  return <MovieRollSvg {...props} />;
});
