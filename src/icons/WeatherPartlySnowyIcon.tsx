import React, { FC, memo } from 'react';
import WeatherPartlySnowySvg from '../svg/weather-partly-snowy.svg';

export interface IWeatherPartlySnowyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WeatherPartlySnowyIcon: FC<IWeatherPartlySnowyIconProps> = memo(props => {
  return <WeatherPartlySnowySvg {...props} />;
});
