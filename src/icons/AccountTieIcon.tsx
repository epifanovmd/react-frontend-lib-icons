import React, { FC, memo } from 'react';
import AccountTieSvg from '../svg/account-tie.svg';

export interface IAccountTieIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountTieIcon: FC<IAccountTieIconProps> = memo(props => {
  return <AccountTieSvg {...props} />;
});
