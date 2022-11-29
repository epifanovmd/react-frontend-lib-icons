import React, { FC, memo } from 'react';
import PhoneCheckOutlineSvg from '../svg/phone-check-outline.svg';

export interface IPhoneCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneCheckOutlineIcon: FC<IPhoneCheckOutlineIconProps> = memo(props => {
  return <PhoneCheckOutlineSvg {...props} />;
});
