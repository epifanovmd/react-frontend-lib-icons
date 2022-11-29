import React, { FC, memo } from 'react';
import BluetoothConnectSvg from '../svg/bluetooth-connect.svg';

export interface IBluetoothConnectIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BluetoothConnectIcon: FC<IBluetoothConnectIconProps> = memo(props => {
  return <BluetoothConnectSvg {...props} />;
});
