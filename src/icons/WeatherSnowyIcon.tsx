import React, { FC, memo } from 'react';
import WeatherSnowySvg from '../svg/weather-snowy.svg';

export interface IWeatherSnowyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WeatherSnowyIcon: FC<IWeatherSnowyIconProps> = memo(props => {
  return <WeatherSnowySvg {...props} />;
});
