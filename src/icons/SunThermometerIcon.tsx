import React, { FC, memo } from 'react';
import SunThermometerSvg from '../svg/sun-thermometer.svg';

export interface ISunThermometerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SunThermometerIcon: FC<ISunThermometerIconProps> = memo(props => {
  return <SunThermometerSvg {...props} />;
});
