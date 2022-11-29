import React, { FC, memo } from 'react';
import WeatherPartlyCloudySvg from '../svg/weather-partly-cloudy.svg';

export interface IWeatherPartlyCloudyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WeatherPartlyCloudyIcon: FC<IWeatherPartlyCloudyIconProps> = memo(props => {
  return <WeatherPartlyCloudySvg {...props} />;
});
