import React, { FC, memo } from 'react';
import AccountSupervisorCircleSvg from '../svg/account-supervisor-circle.svg';

export interface IAccountSupervisorCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountSupervisorCircleIcon: FC<IAccountSupervisorCircleIconProps> = memo(props => {
  return <AccountSupervisorCircleSvg {...props} />;
});
