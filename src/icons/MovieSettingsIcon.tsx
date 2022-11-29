import React, { FC, memo } from 'react';
import MovieSettingsSvg from '../svg/movie-settings.svg';

export interface IMovieSettingsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieSettingsIcon: FC<IMovieSettingsIconProps> = memo(props => {
  return <MovieSettingsSvg {...props} />;
});
