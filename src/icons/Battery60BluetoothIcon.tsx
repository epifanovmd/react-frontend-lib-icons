import React, { FC, memo } from 'react';
import Battery60BluetoothSvg from '../svg/battery-60-bluetooth.svg';

export interface IBattery60BluetoothIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Battery60BluetoothIcon: FC<IBattery60BluetoothIconProps> = memo(props => {
  return <Battery60BluetoothSvg {...props} />;
});
