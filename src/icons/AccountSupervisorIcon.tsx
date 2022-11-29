import React, { FC, memo } from 'react';
import AccountSupervisorSvg from '../svg/account-supervisor.svg';

export interface IAccountSupervisorIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountSupervisorIcon: FC<IAccountSupervisorIconProps> = memo(props => {
  return <AccountSupervisorSvg {...props} />;
});
