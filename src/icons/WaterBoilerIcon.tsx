import React, { FC, memo } from 'react';
import WaterBoilerSvg from '../svg/water-boiler.svg';

export interface IWaterBoilerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WaterBoilerIcon: FC<IWaterBoilerIconProps> = memo(props => {
  return <WaterBoilerSvg {...props} />;
});
