import React, { FC, memo } from 'react';
import Battery70BluetoothSvg from '../svg/battery-70-bluetooth.svg';

export interface IBattery70BluetoothIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Battery70BluetoothIcon: FC<IBattery70BluetoothIconProps> = memo(props => {
  return <Battery70BluetoothSvg {...props} />;
});
