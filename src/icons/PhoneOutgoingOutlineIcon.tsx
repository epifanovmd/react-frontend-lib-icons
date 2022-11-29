import React, { FC, memo } from 'react';
import PhoneOutgoingOutlineSvg from '../svg/phone-outgoing-outline.svg';

export interface IPhoneOutgoingOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneOutgoingOutlineIcon: FC<IPhoneOutgoingOutlineIconProps> = memo(props => {
  return <PhoneOutgoingOutlineSvg {...props} />;
});
