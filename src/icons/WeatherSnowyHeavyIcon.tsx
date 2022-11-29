import React, { FC, memo } from 'react';
import WeatherSnowyHeavySvg from '../svg/weather-snowy-heavy.svg';

export interface IWeatherSnowyHeavyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WeatherSnowyHeavyIcon: FC<IWeatherSnowyHeavyIconProps> = memo(props => {
  return <WeatherSnowyHeavySvg {...props} />;
});
