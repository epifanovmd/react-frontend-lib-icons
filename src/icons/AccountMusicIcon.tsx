import React, { FC, memo } from 'react';
import AccountMusicSvg from '../svg/account-music.svg';

export interface IAccountMusicIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountMusicIcon: FC<IAccountMusicIconProps> = memo(props => {
  return <AccountMusicSvg {...props} />;
});
