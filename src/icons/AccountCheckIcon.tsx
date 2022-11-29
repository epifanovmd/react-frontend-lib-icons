import React, { FC, memo } from 'react';
import AccountCheckSvg from '../svg/account-check.svg';

export interface IAccountCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountCheckIcon: FC<IAccountCheckIconProps> = memo(props => {
  return <AccountCheckSvg {...props} />;
});
