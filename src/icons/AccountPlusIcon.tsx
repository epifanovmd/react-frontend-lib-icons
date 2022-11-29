import React, { FC, memo } from 'react';
import AccountPlusSvg from '../svg/account-plus.svg';

export interface IAccountPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountPlusIcon: FC<IAccountPlusIconProps> = memo(props => {
  return <AccountPlusSvg {...props} />;
});
