import React, { FC, memo } from 'react';
import Battery20BluetoothSvg from '../svg/battery-20-bluetooth.svg';

export interface IBattery20BluetoothIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Battery20BluetoothIcon: FC<IBattery20BluetoothIconProps> = memo(props => {
  return <Battery20BluetoothSvg {...props} />;
});
