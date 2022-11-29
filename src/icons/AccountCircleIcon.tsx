import React, { FC, memo } from 'react';
import AccountCircleSvg from '../svg/account-circle.svg';

export interface IAccountCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountCircleIcon: FC<IAccountCircleIconProps> = memo(props => {
  return <AccountCircleSvg {...props} />;
});
