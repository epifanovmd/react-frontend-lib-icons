import React, { FC, memo } from 'react';
import BluetoothSvg from '../svg/bluetooth.svg';

export interface IBluetoothIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BluetoothIcon: FC<IBluetoothIconProps> = memo(props => {
  return <BluetoothSvg {...props} />;
});
