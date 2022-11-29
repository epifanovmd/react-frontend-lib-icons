import React, { FC, memo } from 'react';
import Battery40BluetoothSvg from '../svg/battery-40-bluetooth.svg';

export interface IBattery40BluetoothIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Battery40BluetoothIcon: FC<IBattery40BluetoothIconProps> = memo(props => {
  return <Battery40BluetoothSvg {...props} />;
});
