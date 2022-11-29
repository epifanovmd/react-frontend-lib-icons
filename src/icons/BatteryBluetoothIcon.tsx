import React, { FC, memo } from 'react';
import BatteryBluetoothSvg from '../svg/battery-bluetooth.svg';

export interface IBatteryBluetoothIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryBluetoothIcon: FC<IBatteryBluetoothIconProps> = memo(props => {
  return <BatteryBluetoothSvg {...props} />;
});
