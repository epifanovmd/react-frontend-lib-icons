import React, { FC, memo } from 'react';
import AccountBadgeSvg from '../svg/account-badge.svg';

export interface IAccountBadgeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountBadgeIcon: FC<IAccountBadgeIconProps> = memo(props => {
  return <AccountBadgeSvg {...props} />;
});
