import React, { FC, memo } from 'react';
import PhoneMinusOutlineSvg from '../svg/phone-minus-outline.svg';

export interface IPhoneMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneMinusOutlineIcon: FC<IPhoneMinusOutlineIconProps> = memo(props => {
  return <PhoneMinusOutlineSvg {...props} />;
});
