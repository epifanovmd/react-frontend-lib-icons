import React, { FC, memo } from 'react';
import AccountHeartSvg from '../svg/account-heart.svg';

export interface IAccountHeartIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountHeartIcon: FC<IAccountHeartIconProps> = memo(props => {
  return <AccountHeartSvg {...props} />;
});
