import React, { FC, memo } from 'react';
import AccountCashOutlineSvg from '../svg/account-cash-outline.svg';

export interface IAccountCashOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountCashOutlineIcon: FC<IAccountCashOutlineIconProps> = memo(props => {
  return <AccountCashOutlineSvg {...props} />;
});
