import React, { FC, memo } from 'react';
import AccountTieVoiceOffSvg from '../svg/account-tie-voice-off.svg';

export interface IAccountTieVoiceOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountTieVoiceOffIcon: FC<IAccountTieVoiceOffIconProps> = memo(props => {
  return <AccountTieVoiceOffSvg {...props} />;
});
