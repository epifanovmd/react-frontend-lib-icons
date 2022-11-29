import React, { FC, memo } from 'react';
import AccountVoiceSvg from '../svg/account-voice.svg';

export interface IAccountVoiceIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountVoiceIcon: FC<IAccountVoiceIconProps> = memo(props => {
  return <AccountVoiceSvg {...props} />;
});
