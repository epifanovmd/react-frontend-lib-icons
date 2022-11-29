import React, { FC, memo } from 'react';
import AccountSupervisorOutlineSvg from '../svg/account-supervisor-outline.svg';

export interface IAccountSupervisorOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountSupervisorOutlineIcon: FC<IAccountSupervisorOutlineIconProps> = memo(props => {
  return <AccountSupervisorOutlineSvg {...props} />;
});
