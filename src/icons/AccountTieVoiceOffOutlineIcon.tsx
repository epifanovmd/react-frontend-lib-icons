import React, { FC, memo } from 'react';
import AccountTieVoiceOffOutlineSvg from '../svg/account-tie-voice-off-outline.svg';

export interface IAccountTieVoiceOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountTieVoiceOffOutlineIcon: FC<IAccountTieVoiceOffOutlineIconProps> = memo(props => {
  return <AccountTieVoiceOffOutlineSvg {...props} />;
});
