import React, { FC, memo } from 'react';
import MouseBluetoothSvg from '../svg/mouse-bluetooth.svg';

export interface IMouseBluetoothIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MouseBluetoothIcon: FC<IMouseBluetoothIconProps> = memo(props => {
  return <MouseBluetoothSvg {...props} />;
});
