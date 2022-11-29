import React, { FC, memo } from 'react';
import WaterBoilerOffSvg from '../svg/water-boiler-off.svg';

export interface IWaterBoilerOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WaterBoilerOffIcon: FC<IWaterBoilerOffIconProps> = memo(props => {
  return <WaterBoilerOffSvg {...props} />;
});
