import React, { FC, memo } from 'react';
import PhoneDialSvg from '../svg/phone-dial.svg';

export interface IPhoneDialIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneDialIcon: FC<IPhoneDialIconProps> = memo(props => {
  return <PhoneDialSvg {...props} />;
});
