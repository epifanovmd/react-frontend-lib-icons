import React, { FC, memo } from 'react';
import AccountCreditCardOutlineSvg from '../svg/account-credit-card-outline.svg';

export interface IAccountCreditCardOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountCreditCardOutlineIcon: FC<IAccountCreditCardOutlineIconProps> = memo(props => {
  return <AccountCreditCardOutlineSvg {...props} />;
});
