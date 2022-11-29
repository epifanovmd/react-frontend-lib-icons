import React, { FC, memo } from 'react';
import ThermometerLowSvg from '../svg/thermometer-low.svg';

export interface IThermometerLowIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ThermometerLowIcon: FC<IThermometerLowIconProps> = memo(props => {
  return <ThermometerLowSvg {...props} />;
});
