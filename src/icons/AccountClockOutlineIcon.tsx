import React, { FC, memo } from 'react';
import AccountClockOutlineSvg from '../svg/account-clock-outline.svg';

export interface IAccountClockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountClockOutlineIcon: FC<IAccountClockOutlineIconProps> = memo(props => {
  return <AccountClockOutlineSvg {...props} />;
});
