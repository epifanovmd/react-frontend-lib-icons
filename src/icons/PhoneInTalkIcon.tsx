import React, { FC, memo } from 'react';
import PhoneInTalkSvg from '../svg/phone-in-talk.svg';

export interface IPhoneInTalkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneInTalkIcon: FC<IPhoneInTalkIconProps> = memo(props => {
  return <PhoneInTalkSvg {...props} />;
});
