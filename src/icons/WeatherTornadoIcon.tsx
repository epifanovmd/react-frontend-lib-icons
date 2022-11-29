import React, { FC, memo } from 'react';
import WeatherTornadoSvg from '../svg/weather-tornado.svg';

export interface IWeatherTornadoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WeatherTornadoIcon: FC<IWeatherTornadoIconProps> = memo(props => {
  return <WeatherTornadoSvg {...props} />;
});
