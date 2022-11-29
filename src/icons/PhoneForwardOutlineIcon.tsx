import React, { FC, memo } from 'react';
import PhoneForwardOutlineSvg from '../svg/phone-forward-outline.svg';

export interface IPhoneForwardOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneForwardOutlineIcon: FC<IPhoneForwardOutlineIconProps> = memo(props => {
  return <PhoneForwardOutlineSvg {...props} />;
});
