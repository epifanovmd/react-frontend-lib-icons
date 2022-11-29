import React, { FC, memo } from 'react';
import WeatherHurricaneSvg from '../svg/weather-hurricane.svg';

export interface IWeatherHurricaneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WeatherHurricaneIcon: FC<IWeatherHurricaneIconProps> = memo(props => {
  return <WeatherHurricaneSvg {...props} />;
});
