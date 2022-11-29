import React, { FC, memo } from 'react';
import WeatherCloudyAlertSvg from '../svg/weather-cloudy-alert.svg';

export interface IWeatherCloudyAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WeatherCloudyAlertIcon: FC<IWeatherCloudyAlertIconProps> = memo(props => {
  return <WeatherCloudyAlertSvg {...props} />;
});
