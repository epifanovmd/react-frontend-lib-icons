import React, { FC, memo } from 'react';
import WeatherPouringSvg from '../svg/weather-pouring.svg';

export interface IWeatherPouringIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WeatherPouringIcon: FC<IWeatherPouringIconProps> = memo(props => {
  return <WeatherPouringSvg {...props} />;
});
