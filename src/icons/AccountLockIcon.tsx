import React, { FC, memo } from 'react';
import AccountLockSvg from '../svg/account-lock.svg';

export interface IAccountLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountLockIcon: FC<IAccountLockIconProps> = memo(props => {
  return <AccountLockSvg {...props} />;
});
