import React, { FC, memo } from 'react';
import WeatherLightningRainySvg from '../svg/weather-lightning-rainy.svg';

export interface IWeatherLightningRainyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WeatherLightningRainyIcon: FC<IWeatherLightningRainyIconProps> = memo(props => {
  return <WeatherLightningRainySvg {...props} />;
});
