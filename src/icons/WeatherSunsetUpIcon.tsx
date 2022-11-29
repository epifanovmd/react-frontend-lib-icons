import React, { FC, memo } from 'react';
import WeatherSunsetUpSvg from '../svg/weather-sunset-up.svg';

export interface IWeatherSunsetUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WeatherSunsetUpIcon: FC<IWeatherSunsetUpIconProps> = memo(props => {
  return <WeatherSunsetUpSvg {...props} />;
});
