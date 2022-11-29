import React, { FC, memo } from 'react';
import CoolantTemperatureSvg from '../svg/coolant-temperature.svg';

export interface ICoolantTemperatureIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CoolantTemperatureIcon: FC<ICoolantTemperatureIconProps> = memo(props => {
  return <CoolantTemperatureSvg {...props} />;
});
