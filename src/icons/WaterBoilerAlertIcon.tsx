import React, { FC, memo } from 'react';
import WaterBoilerAlertSvg from '../svg/water-boiler-alert.svg';

export interface IWaterBoilerAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WaterBoilerAlertIcon: FC<IWaterBoilerAlertIconProps> = memo(props => {
  return <WaterBoilerAlertSvg {...props} />;
});
