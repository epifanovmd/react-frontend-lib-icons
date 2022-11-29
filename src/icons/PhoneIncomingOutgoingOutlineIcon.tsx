import React, { FC, memo } from 'react';
import PhoneIncomingOutgoingOutlineSvg from '../svg/phone-incoming-outgoing-outline.svg';

export interface IPhoneIncomingOutgoingOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneIncomingOutgoingOutlineIcon: FC<IPhoneIncomingOutgoingOutlineIconProps> = memo(props => {
  return <PhoneIncomingOutgoingOutlineSvg {...props} />;
});
