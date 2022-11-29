import React, { FC, memo } from 'react';
import AccountOffSvg from '../svg/account-off.svg';

export interface IAccountOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountOffIcon: FC<IAccountOffIconProps> = memo(props => {
  return <AccountOffSvg {...props} />;
});
