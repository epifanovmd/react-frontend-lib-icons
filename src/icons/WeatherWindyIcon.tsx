import React, { FC, memo } from 'react';
import WeatherWindySvg from '../svg/weather-windy.svg';

export interface IWeatherWindyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WeatherWindyIcon: FC<IWeatherWindyIconProps> = memo(props => {
  return <WeatherWindySvg {...props} />;
});
