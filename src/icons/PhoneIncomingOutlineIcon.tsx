import React, { FC, memo } from 'react';
import PhoneIncomingOutlineSvg from '../svg/phone-incoming-outline.svg';

export interface IPhoneIncomingOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneIncomingOutlineIcon: FC<IPhoneIncomingOutlineIconProps> = memo(props => {
  return <PhoneIncomingOutlineSvg {...props} />;
});
