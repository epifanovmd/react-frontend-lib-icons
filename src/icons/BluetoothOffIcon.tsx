import React, { FC, memo } from 'react';
import BluetoothOffSvg from '../svg/bluetooth-off.svg';

export interface IBluetoothOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BluetoothOffIcon: FC<IBluetoothOffIconProps> = memo(props => {
  return <BluetoothOffSvg {...props} />;
});
