import React, { FC, memo } from 'react';
import ThermometerMinusSvg from '../svg/thermometer-minus.svg';

export interface IThermometerMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ThermometerMinusIcon: FC<IThermometerMinusIconProps> = memo(props => {
  return <ThermometerMinusSvg {...props} />;
});
