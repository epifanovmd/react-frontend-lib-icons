import React, { FC, memo } from 'react';
import PhoneMessageSvg from '../svg/phone-message.svg';

export interface IPhoneMessageIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneMessageIcon: FC<IPhoneMessageIconProps> = memo(props => {
  return <PhoneMessageSvg {...props} />;
});
