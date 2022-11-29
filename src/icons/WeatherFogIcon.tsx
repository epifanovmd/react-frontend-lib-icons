import React, { FC, memo } from 'react';
import WeatherFogSvg from '../svg/weather-fog.svg';

export interface IWeatherFogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WeatherFogIcon: FC<IWeatherFogIconProps> = memo(props => {
  return <WeatherFogSvg {...props} />;
});
