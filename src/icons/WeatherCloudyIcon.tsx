import React, { FC, memo } from 'react';
import WeatherCloudySvg from '../svg/weather-cloudy.svg';

export interface IWeatherCloudyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WeatherCloudyIcon: FC<IWeatherCloudyIconProps> = memo(props => {
  return <WeatherCloudySvg {...props} />;
});
