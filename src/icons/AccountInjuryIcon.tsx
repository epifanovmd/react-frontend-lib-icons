import React, { FC, memo } from 'react';
import AccountInjurySvg from '../svg/account-injury.svg';

export interface IAccountInjuryIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountInjuryIcon: FC<IAccountInjuryIconProps> = memo(props => {
  return <AccountInjurySvg {...props} />;
});
