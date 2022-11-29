import React, { FC, memo } from 'react';
import PhoneIncomingOutgoingSvg from '../svg/phone-incoming-outgoing.svg';

export interface IPhoneIncomingOutgoingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneIncomingOutgoingIcon: FC<IPhoneIncomingOutgoingIconProps> = memo(props => {
  return <PhoneIncomingOutgoingSvg {...props} />;
});
