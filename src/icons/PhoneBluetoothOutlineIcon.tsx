import React, { FC, memo } from 'react';
import PhoneBluetoothOutlineSvg from '../svg/phone-bluetooth-outline.svg';

export interface IPhoneBluetoothOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneBluetoothOutlineIcon: FC<IPhoneBluetoothOutlineIconProps> = memo(props => {
  return <PhoneBluetoothOutlineSvg {...props} />;
});
