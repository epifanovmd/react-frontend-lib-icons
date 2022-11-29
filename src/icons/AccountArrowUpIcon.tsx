import React, { FC, memo } from 'react';
import AccountArrowUpSvg from '../svg/account-arrow-up.svg';

export interface IAccountArrowUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountArrowUpIcon: FC<IAccountArrowUpIconProps> = memo(props => {
  return <AccountArrowUpSvg {...props} />;
});
