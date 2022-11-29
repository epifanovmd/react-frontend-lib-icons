import React, { FC, memo } from 'react';
import Battery50BluetoothSvg from '../svg/battery-50-bluetooth.svg';

export interface IBattery50BluetoothIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Battery50BluetoothIcon: FC<IBattery50BluetoothIconProps> = memo(props => {
  return <Battery50BluetoothSvg {...props} />;
});
