import React, { FC, memo } from 'react';
import AccountDetailsSvg from '../svg/account-details.svg';

export interface IAccountDetailsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountDetailsIcon: FC<IAccountDetailsIconProps> = memo(props => {
  return <AccountDetailsSvg {...props} />;
});
