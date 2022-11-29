import React, { FC, memo } from 'react';
import HeatPumpSvg from '../svg/heat-pump.svg';

export interface IHeatPumpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeatPumpIcon: FC<IHeatPumpIconProps> = memo(props => {
  return <HeatPumpSvg {...props} />;
});
