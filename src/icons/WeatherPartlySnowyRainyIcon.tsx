import React, { FC, memo } from 'react';
import WeatherPartlySnowyRainySvg from '../svg/weather-partly-snowy-rainy.svg';

export interface IWeatherPartlySnowyRainyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WeatherPartlySnowyRainyIcon: FC<IWeatherPartlySnowyRainyIconProps> = memo(props => {
  return <WeatherPartlySnowyRainySvg {...props} />;
});
