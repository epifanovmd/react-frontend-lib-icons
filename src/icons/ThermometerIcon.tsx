import React, { FC, memo } from 'react';
import ThermometerSvg from '../svg/thermometer.svg';

export interface IThermometerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ThermometerIcon: FC<IThermometerIconProps> = memo(props => {
  return <ThermometerSvg {...props} />;
});
