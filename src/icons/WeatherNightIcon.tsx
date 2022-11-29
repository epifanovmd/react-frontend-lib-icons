import React, { FC, memo } from 'react';
import WeatherNightSvg from '../svg/weather-night.svg';

export interface IWeatherNightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WeatherNightIcon: FC<IWeatherNightIconProps> = memo(props => {
  return <WeatherNightSvg {...props} />;
});
