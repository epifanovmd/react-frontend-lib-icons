import React, { FC, memo } from 'react';
import PhoneHangupOutlineSvg from '../svg/phone-hangup-outline.svg';

export interface IPhoneHangupOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneHangupOutlineIcon: FC<IPhoneHangupOutlineIconProps> = memo(props => {
  return <PhoneHangupOutlineSvg {...props} />;
});
