import React, { FC, memo } from 'react';
import AccountMusicOutlineSvg from '../svg/account-music-outline.svg';

export interface IAccountMusicOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountMusicOutlineIcon: FC<IAccountMusicOutlineIconProps> = memo(props => {
  return <AccountMusicOutlineSvg {...props} />;
});
