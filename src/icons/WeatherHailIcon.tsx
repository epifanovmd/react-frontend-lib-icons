import React, { FC, memo } from 'react';
import WeatherHailSvg from '../svg/weather-hail.svg';

export interface IWeatherHailIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WeatherHailIcon: FC<IWeatherHailIconProps> = memo(props => {
  return <WeatherHailSvg {...props} />;
});
