import React, { FC, memo } from 'react';
import WeatherDustSvg from '../svg/weather-dust.svg';

export interface IWeatherDustIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WeatherDustIcon: FC<IWeatherDustIconProps> = memo(props => {
  return <WeatherDustSvg {...props} />;
});
