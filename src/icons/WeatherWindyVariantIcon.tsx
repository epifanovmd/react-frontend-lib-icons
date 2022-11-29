import React, { FC, memo } from 'react';
import WeatherWindyVariantSvg from '../svg/weather-windy-variant.svg';

export interface IWeatherWindyVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WeatherWindyVariantIcon: FC<IWeatherWindyVariantIconProps> = memo(props => {
  return <WeatherWindyVariantSvg {...props} />;
});
