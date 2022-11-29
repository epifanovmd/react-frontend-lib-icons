import React, { FC, memo } from 'react';
import WeatherSunsetSvg from '../svg/weather-sunset.svg';

export interface IWeatherSunsetIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WeatherSunsetIcon: FC<IWeatherSunsetIconProps> = memo(props => {
  return <WeatherSunsetSvg {...props} />;
});
