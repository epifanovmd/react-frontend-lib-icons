import React, { FC, memo } from 'react';
import PhoneHangupSvg from '../svg/phone-hangup.svg';

export interface IPhoneHangupIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneHangupIcon: FC<IPhoneHangupIconProps> = memo(props => {
  return <PhoneHangupSvg {...props} />;
});
