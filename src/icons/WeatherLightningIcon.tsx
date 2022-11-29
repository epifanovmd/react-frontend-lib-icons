import React, { FC, memo } from 'react';
import WeatherLightningSvg from '../svg/weather-lightning.svg';

export interface IWeatherLightningIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WeatherLightningIcon: FC<IWeatherLightningIconProps> = memo(props => {
  return <WeatherLightningSvg {...props} />;
});
