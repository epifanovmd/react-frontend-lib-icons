import React, { FC, memo } from 'react';
import BatteryAlertSvg from '../svg/battery-alert.svg';

export interface IBatteryAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryAlertIcon: FC<IBatteryAlertIconProps> = memo(props => {
  return <BatteryAlertSvg {...props} />;
});
