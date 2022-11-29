import React, { FC, memo } from 'react';
import AccountArrowLeftSvg from '../svg/account-arrow-left.svg';

export interface IAccountArrowLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountArrowLeftIcon: FC<IAccountArrowLeftIconProps> = memo(props => {
  return <AccountArrowLeftSvg {...props} />;
});
