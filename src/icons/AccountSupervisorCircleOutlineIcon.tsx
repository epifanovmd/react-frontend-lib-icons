import React, { FC, memo } from 'react';
import AccountSupervisorCircleOutlineSvg from '../svg/account-supervisor-circle-outline.svg';

export interface IAccountSupervisorCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountSupervisorCircleOutlineIcon: FC<IAccountSupervisorCircleOutlineIconProps> = memo(props => {
  return <AccountSupervisorCircleOutlineSvg {...props} />;
});
