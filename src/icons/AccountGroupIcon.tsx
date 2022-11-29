import React, { FC, memo } from 'react';
import AccountGroupSvg from '../svg/account-group.svg';

export interface IAccountGroupIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountGroupIcon: FC<IAccountGroupIconProps> = memo(props => {
  return <AccountGroupSvg {...props} />;
});
