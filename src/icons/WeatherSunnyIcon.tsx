import React, { FC, memo } from 'react';
import WeatherSunnySvg from '../svg/weather-sunny.svg';

export interface IWeatherSunnyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WeatherSunnyIcon: FC<IWeatherSunnyIconProps> = memo(props => {
  return <WeatherSunnySvg {...props} />;
});
