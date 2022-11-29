import React, { FC, memo } from 'react';
import WeatherSunnyOffSvg from '../svg/weather-sunny-off.svg';

export interface IWeatherSunnyOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WeatherSunnyOffIcon: FC<IWeatherSunnyOffIconProps> = memo(props => {
  return <WeatherSunnyOffSvg {...props} />;
});
