import React, { FC, memo } from 'react';
import AccountSwitchSvg from '../svg/account-switch.svg';

export interface IAccountSwitchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountSwitchIcon: FC<IAccountSwitchIconProps> = memo(props => {
  return <AccountSwitchSvg {...props} />;
});
