import React, { FC, memo } from 'react';
import AccountCancelSvg from '../svg/account-cancel.svg';

export interface IAccountCancelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountCancelIcon: FC<IAccountCancelIconProps> = memo(props => {
  return <AccountCancelSvg {...props} />;
});
