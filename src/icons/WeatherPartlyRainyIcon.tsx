import React, { FC, memo } from 'react';
import WeatherPartlyRainySvg from '../svg/weather-partly-rainy.svg';

export interface IWeatherPartlyRainyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WeatherPartlyRainyIcon: FC<IWeatherPartlyRainyIconProps> = memo(props => {
  return <WeatherPartlyRainySvg {...props} />;
});
