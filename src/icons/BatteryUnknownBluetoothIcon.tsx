import React, { FC, memo } from 'react';
import BatteryUnknownBluetoothSvg from '../svg/battery-unknown-bluetooth.svg';

export interface IBatteryUnknownBluetoothIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryUnknownBluetoothIcon: FC<IBatteryUnknownBluetoothIconProps> = memo(props => {
  return <BatteryUnknownBluetoothSvg {...props} />;
});
