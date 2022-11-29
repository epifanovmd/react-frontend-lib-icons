import React, { FC, memo } from 'react';
import MovieOpenPlusOutlineSvg from '../svg/movie-open-plus-outline.svg';

export interface IMovieOpenPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieOpenPlusOutlineIcon: FC<IMovieOpenPlusOutlineIconProps> = memo(props => {
  return <MovieOpenPlusOutlineSvg {...props} />;
});
