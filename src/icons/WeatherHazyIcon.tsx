import React, { FC, memo } from 'react';
import WeatherHazySvg from '../svg/weather-hazy.svg';

export interface IWeatherHazyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WeatherHazyIcon: FC<IWeatherHazyIconProps> = memo(props => {
  return <WeatherHazySvg {...props} />;
});
