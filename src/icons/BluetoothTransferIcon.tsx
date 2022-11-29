import React, { FC, memo } from 'react';
import BluetoothTransferSvg from '../svg/bluetooth-transfer.svg';

export interface IBluetoothTransferIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BluetoothTransferIcon: FC<IBluetoothTransferIconProps> = memo(props => {
  return <BluetoothTransferSvg {...props} />;
});
