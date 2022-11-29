import React, { FC, memo } from 'react';
import MovieRemoveOutlineSvg from '../svg/movie-remove-outline.svg';

export interface IMovieRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieRemoveOutlineIcon: FC<IMovieRemoveOutlineIconProps> = memo(props => {
  return <MovieRemoveOutlineSvg {...props} />;
});
