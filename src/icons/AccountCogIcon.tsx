import React, { FC, memo } from 'react';
import AccountCogSvg from '../svg/account-cog.svg';

export interface IAccountCogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountCogIcon: FC<IAccountCogIconProps> = memo(props => {
  return <AccountCogSvg {...props} />;
});
