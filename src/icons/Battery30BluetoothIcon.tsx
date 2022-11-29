import React, { FC, memo } from 'react';
import Battery30BluetoothSvg from '../svg/battery-30-bluetooth.svg';

export interface IBattery30BluetoothIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Battery30BluetoothIcon: FC<IBattery30BluetoothIconProps> = memo(props => {
  return <Battery30BluetoothSvg {...props} />;
});
