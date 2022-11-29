import React, { FC, memo } from 'react';
import ThermostatAutoSvg from '../svg/thermostat-auto.svg';

export interface IThermostatAutoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ThermostatAutoIcon: FC<IThermostatAutoIconProps> = memo(props => {
  return <ThermostatAutoSvg {...props} />;
});
