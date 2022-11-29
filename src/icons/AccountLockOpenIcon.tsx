import React, { FC, memo } from 'react';
import AccountLockOpenSvg from '../svg/account-lock-open.svg';

export interface IAccountLockOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountLockOpenIcon: FC<IAccountLockOpenIconProps> = memo(props => {
  return <AccountLockOpenSvg {...props} />;
});
