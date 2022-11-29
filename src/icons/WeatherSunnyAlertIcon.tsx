import React, { FC, memo } from 'react';
import WeatherSunnyAlertSvg from '../svg/weather-sunny-alert.svg';

export interface IWeatherSunnyAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WeatherSunnyAlertIcon: FC<IWeatherSunnyAlertIconProps> = memo(props => {
  return <WeatherSunnyAlertSvg {...props} />;
});
