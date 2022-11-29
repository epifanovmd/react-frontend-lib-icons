import React, { FC, memo } from 'react';
import WeatherNightPartlyCloudySvg from '../svg/weather-night-partly-cloudy.svg';

export interface IWeatherNightPartlyCloudyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WeatherNightPartlyCloudyIcon: FC<IWeatherNightPartlyCloudyIconProps> = memo(props => {
  return <WeatherNightPartlyCloudySvg {...props} />;
});
