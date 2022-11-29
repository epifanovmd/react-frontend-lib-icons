import React, { FC, memo } from 'react';
import Battery10BluetoothSvg from '../svg/battery-10-bluetooth.svg';

export interface IBattery10BluetoothIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Battery10BluetoothIcon: FC<IBattery10BluetoothIconProps> = memo(props => {
  return <Battery10BluetoothSvg {...props} />;
});
