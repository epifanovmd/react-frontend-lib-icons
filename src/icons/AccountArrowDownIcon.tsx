import React, { FC, memo } from 'react';
import AccountArrowDownSvg from '../svg/account-arrow-down.svg';

export interface IAccountArrowDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountArrowDownIcon: FC<IAccountArrowDownIconProps> = memo(props => {
  return <AccountArrowDownSvg {...props} />;
});
