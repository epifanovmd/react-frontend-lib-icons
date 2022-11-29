import React, { FC, memo } from 'react';
import Battery80BluetoothSvg from '../svg/battery-80-bluetooth.svg';

export interface IBattery80BluetoothIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Battery80BluetoothIcon: FC<IBattery80BluetoothIconProps> = memo(props => {
  return <Battery80BluetoothSvg {...props} />;
});
