import React, { FC, memo } from 'react';
import AccountAlertOutlineSvg from '../svg/account-alert-outline.svg';

export interface IAccountAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountAlertOutlineIcon: FC<IAccountAlertOutlineIconProps> = memo(props => {
  return <AccountAlertOutlineSvg {...props} />;
});
