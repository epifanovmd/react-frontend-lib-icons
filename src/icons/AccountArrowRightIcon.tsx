import React, { FC, memo } from 'react';
import AccountArrowRightSvg from '../svg/account-arrow-right.svg';

export interface IAccountArrowRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountArrowRightIcon: FC<IAccountArrowRightIconProps> = memo(props => {
  return <AccountArrowRightSvg {...props} />;
});
