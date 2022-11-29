import React, { FC, memo } from 'react';
import WeatherCloudyClockSvg from '../svg/weather-cloudy-clock.svg';

export interface IWeatherCloudyClockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WeatherCloudyClockIcon: FC<IWeatherCloudyClockIconProps> = memo(props => {
  return <WeatherCloudyClockSvg {...props} />;
});
