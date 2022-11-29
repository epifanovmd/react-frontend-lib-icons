import React, { FC, memo } from 'react';
import ThermostatSvg from '../svg/thermostat.svg';

export interface IThermostatIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ThermostatIcon: FC<IThermostatIconProps> = memo(props => {
  return <ThermostatSvg {...props} />;
});
