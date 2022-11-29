import React, { FC, memo } from 'react';
import BatteryAlertBluetoothSvg from '../svg/battery-alert-bluetooth.svg';

export interface IBatteryAlertBluetoothIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryAlertBluetoothIcon: FC<IBatteryAlertBluetoothIconProps> = memo(props => {
  return <BatteryAlertBluetoothSvg {...props} />;
});
