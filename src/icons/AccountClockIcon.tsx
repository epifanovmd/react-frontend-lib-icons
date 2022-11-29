import React, { FC, memo } from 'react';
import AccountClockSvg from '../svg/account-clock.svg';

export interface IAccountClockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountClockIcon: FC<IAccountClockIconProps> = memo(props => {
  return <AccountClockSvg {...props} />;
});
