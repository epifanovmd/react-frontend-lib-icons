import React, { FC, memo } from 'react';
import AccountVoiceOffSvg from '../svg/account-voice-off.svg';

export interface IAccountVoiceOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountVoiceOffIcon: FC<IAccountVoiceOffIconProps> = memo(props => {
  return <AccountVoiceOffSvg {...props} />;
});
