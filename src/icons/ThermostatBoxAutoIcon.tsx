import React, { FC, memo } from 'react';
import ThermostatBoxAutoSvg from '../svg/thermostat-box-auto.svg';

export interface IThermostatBoxAutoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ThermostatBoxAutoIcon: FC<IThermostatBoxAutoIconProps> = memo(props => {
  return <ThermostatBoxAutoSvg {...props} />;
});
