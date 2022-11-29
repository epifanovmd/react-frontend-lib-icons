import React, { FC, memo } from 'react';
import PhoneInTalkOutlineSvg from '../svg/phone-in-talk-outline.svg';

export interface IPhoneInTalkOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneInTalkOutlineIcon: FC<IPhoneInTalkOutlineIconProps> = memo(props => {
  return <PhoneInTalkOutlineSvg {...props} />;
});
