import React, { FC, memo } from 'react';
import WeatherPartlyLightningSvg from '../svg/weather-partly-lightning.svg';

export interface IWeatherPartlyLightningIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WeatherPartlyLightningIcon: FC<IWeatherPartlyLightningIconProps> = memo(props => {
  return <WeatherPartlyLightningSvg {...props} />;
});
