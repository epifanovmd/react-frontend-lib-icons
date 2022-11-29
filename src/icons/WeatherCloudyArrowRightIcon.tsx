import React, { FC, memo } from 'react';
import WeatherCloudyArrowRightSvg from '../svg/weather-cloudy-arrow-right.svg';

export interface IWeatherCloudyArrowRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WeatherCloudyArrowRightIcon: FC<IWeatherCloudyArrowRightIconProps> = memo(props => {
  return <WeatherCloudyArrowRightSvg {...props} />;
});
