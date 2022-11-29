import React, { FC, memo } from 'react';
import AccountSwitchOutlineSvg from '../svg/account-switch-outline.svg';

export interface IAccountSwitchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountSwitchOutlineIcon: FC<IAccountSwitchOutlineIconProps> = memo(props => {
  return <AccountSwitchOutlineSvg {...props} />;
});
