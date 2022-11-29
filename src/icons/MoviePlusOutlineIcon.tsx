import React, { FC, memo } from 'react';
import MoviePlusOutlineSvg from '../svg/movie-plus-outline.svg';

export interface IMoviePlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MoviePlusOutlineIcon: FC<IMoviePlusOutlineIconProps> = memo(props => {
  return <MoviePlusOutlineSvg {...props} />;
});
