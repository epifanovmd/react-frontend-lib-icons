import React, { FC, memo } from 'react';
import WaterBoilerAutoSvg from '../svg/water-boiler-auto.svg';

export interface IWaterBoilerAutoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WaterBoilerAutoIcon: FC<IWaterBoilerAutoIconProps> = memo(props => {
  return <WaterBoilerAutoSvg {...props} />;
});
