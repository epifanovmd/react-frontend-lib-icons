import React, { FC, memo } from 'react';
import WaterPumpSvg from '../svg/water-pump.svg';

export interface IWaterPumpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WaterPumpIcon: FC<IWaterPumpIconProps> = memo(props => {
  return <WaterPumpSvg {...props} />;
});
