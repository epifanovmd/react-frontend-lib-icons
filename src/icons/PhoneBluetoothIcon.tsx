import React, { FC, memo } from 'react';
import PhoneBluetoothSvg from '../svg/phone-bluetooth.svg';

export interface IPhoneBluetoothIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneBluetoothIcon: FC<IPhoneBluetoothIconProps> = memo(props => {
  return <PhoneBluetoothSvg {...props} />;
});
