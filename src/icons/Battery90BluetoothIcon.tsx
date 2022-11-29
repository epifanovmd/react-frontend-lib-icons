import React, { FC, memo } from 'react';
import Battery90BluetoothSvg from '../svg/battery-90-bluetooth.svg';

export interface IBattery90BluetoothIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Battery90BluetoothIcon: FC<IBattery90BluetoothIconProps> = memo(props => {
  return <Battery90BluetoothSvg {...props} />;
});
