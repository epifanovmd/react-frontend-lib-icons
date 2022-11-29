import React, { FC, memo } from 'react';
import SolarPowerSvg from '../svg/solar-power.svg';

export interface ISolarPowerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SolarPowerIcon: FC<ISolarPowerIconProps> = memo(props => {
  return <SolarPowerSvg {...props} />;
});
