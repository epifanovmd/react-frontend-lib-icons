import React, { FC, memo } from 'react';
import AccountSvg from '../svg/account.svg';

export interface IAccountIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountIcon: FC<IAccountIconProps> = memo(props => {
  return <AccountSvg {...props} />;
});
