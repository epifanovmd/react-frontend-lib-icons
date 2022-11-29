import React, { FC, memo } from 'react';
import AccountSyncOutlineSvg from '../svg/account-sync-outline.svg';

export interface IAccountSyncOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountSyncOutlineIcon: FC<IAccountSyncOutlineIconProps> = memo(props => {
  return <AccountSyncOutlineSvg {...props} />;
});
