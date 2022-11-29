import React, { FC, memo } from 'react';
import AccountCashSvg from '../svg/account-cash.svg';

export interface IAccountCashIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountCashIcon: FC<IAccountCashIconProps> = memo(props => {
  return <AccountCashSvg {...props} />;
});
