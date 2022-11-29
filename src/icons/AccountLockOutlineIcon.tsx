import React, { FC, memo } from 'react';
import AccountLockOutlineSvg from '../svg/account-lock-outline.svg';

export interface IAccountLockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountLockOutlineIcon: FC<IAccountLockOutlineIconProps> = memo(props => {
  return <AccountLockOutlineSvg {...props} />;
});
