import React, { FC, memo } from 'react';
import HeadphonesBluetoothSvg from '../svg/headphones-bluetooth.svg';

export interface IHeadphonesBluetoothIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeadphonesBluetoothIcon: FC<IHeadphonesBluetoothIconProps> = memo(props => {
  return <HeadphonesBluetoothSvg {...props} />;
});
