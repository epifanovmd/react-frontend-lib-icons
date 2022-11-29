import React, { FC, memo } from 'react';
import ThermometerAutoSvg from '../svg/thermometer-auto.svg';

export interface IThermometerAutoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ThermometerAutoIcon: FC<IThermometerAutoIconProps> = memo(props => {
  return <ThermometerAutoSvg {...props} />;
});
