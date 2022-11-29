import React, { FC, memo } from 'react';
import AccountSyncSvg from '../svg/account-sync.svg';

export interface IAccountSyncIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountSyncIcon: FC<IAccountSyncIconProps> = memo(props => {
  return <AccountSyncSvg {...props} />;
});
