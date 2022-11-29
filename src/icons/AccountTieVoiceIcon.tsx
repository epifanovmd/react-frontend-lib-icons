import React, { FC, memo } from 'react';
import AccountTieVoiceSvg from '../svg/account-tie-voice.svg';

export interface IAccountTieVoiceIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountTieVoiceIcon: FC<IAccountTieVoiceIconProps> = memo(props => {
  return <AccountTieVoiceSvg {...props} />;
});
