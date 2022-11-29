import React, { FC, memo } from 'react';
import AccountWrenchSvg from '../svg/account-wrench.svg';

export interface IAccountWrenchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountWrenchIcon: FC<IAccountWrenchIconProps> = memo(props => {
  return <AccountWrenchSvg {...props} />;
});
