import React, { FC, memo } from 'react';
import PhoneOutgoingSvg from '../svg/phone-outgoing.svg';

export interface IPhoneOutgoingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneOutgoingIcon: FC<IPhoneOutgoingIconProps> = memo(props => {
  return <PhoneOutgoingSvg {...props} />;
});
