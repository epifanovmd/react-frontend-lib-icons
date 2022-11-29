import React, { FC, memo } from 'react';
import AccountTieVoiceOutlineSvg from '../svg/account-tie-voice-outline.svg';

export interface IAccountTieVoiceOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountTieVoiceOutlineIcon: FC<IAccountTieVoiceOutlineIconProps> = memo(props => {
  return <AccountTieVoiceOutlineSvg {...props} />;
});
