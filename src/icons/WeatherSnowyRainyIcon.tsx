import React, { FC, memo } from 'react';
import WeatherSnowyRainySvg from '../svg/weather-snowy-rainy.svg';

export interface IWeatherSnowyRainyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WeatherSnowyRainyIcon: FC<IWeatherSnowyRainyIconProps> = memo(props => {
  return <WeatherSnowyRainySvg {...props} />;
});
