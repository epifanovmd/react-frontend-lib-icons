import React, { FC, memo } from 'react';
import WeatherSunsetDownSvg from '../svg/weather-sunset-down.svg';

export interface IWeatherSunsetDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WeatherSunsetDownIcon: FC<IWeatherSunsetDownIconProps> = memo(props => {
  return <WeatherSunsetDownSvg {...props} />;
});
