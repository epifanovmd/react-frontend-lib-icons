import React, { FC, memo } from 'react';
import MovieOpenSettingsSvg from '../svg/movie-open-settings.svg';

export interface IMovieOpenSettingsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MovieOpenSettingsIcon: FC<IMovieOpenSettingsIconProps> = memo(props => {
  return <MovieOpenSettingsSvg {...props} />;
});
