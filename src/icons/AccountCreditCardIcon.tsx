import React, { FC, memo } from 'react';
import AccountCreditCardSvg from '../svg/account-credit-card.svg';

export interface IAccountCreditCardIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountCreditCardIcon: FC<IAccountCreditCardIconProps> = memo(props => {
  return <AccountCreditCardSvg {...props} />;
});
