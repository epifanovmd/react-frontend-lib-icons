import React, { FC, memo } from 'react';
import HomeThermometerSvg from '../svg/home-thermometer.svg';

export interface IHomeThermometerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeThermometerIcon: FC<IHomeThermometerIconProps> = memo(props => {
  return <HomeThermometerSvg {...props} />;
});
