import React, { FC, memo } from 'react';
import PhoneMessageOutlineSvg from '../svg/phone-message-outline.svg';

export interface IPhoneMessageOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneMessageOutlineIcon: FC<IPhoneMessageOutlineIconProps> = memo(props => {
  return <PhoneMessageOutlineSvg {...props} />;
});
