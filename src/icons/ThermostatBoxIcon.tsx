import React, { FC, memo } from 'react';
import ThermostatBoxSvg from '../svg/thermostat-box.svg';

export interface IThermostatBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ThermostatBoxIcon: FC<IThermostatBoxIconProps> = memo(props => {
  return <ThermostatBoxSvg {...props} />;
});
