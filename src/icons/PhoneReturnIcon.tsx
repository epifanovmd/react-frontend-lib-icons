import React, { FC, memo } from 'react';
import PhoneReturnSvg from '../svg/phone-return.svg';

export interface IPhoneReturnIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneReturnIcon: FC<IPhoneReturnIconProps> = memo(props => {
  return <PhoneReturnSvg {...props} />;
});
