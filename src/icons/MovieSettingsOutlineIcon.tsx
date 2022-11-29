import React, { FC, memo } from 'react';
import MovieSettingsOutlineSvg from '../svg/movie-settings-outline.svg';

export interface IMovieSettingsOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieSettingsOutlineIcon: FC<IMovieSettingsOutlineIconProps> = memo(props => {
  return <MovieSettingsOutlineSvg {...props} />;
});
