import React, { FC, memo } from 'react';
import AccountBadgeOutlineSvg from '../svg/account-badge-outline.svg';

export interface IAccountBadgeOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountBadgeOutlineIcon: FC<IAccountBadgeOutlineIconProps> = memo(props => {
  return <AccountBadgeOutlineSvg {...props} />;
});
