import React, { FC, memo } from 'react';
import AccountAlertSvg from '../svg/account-alert.svg';

export interface IAccountAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountAlertIcon: FC<IAccountAlertIconProps> = memo(props => {
  return <AccountAlertSvg {...props} />;
});
