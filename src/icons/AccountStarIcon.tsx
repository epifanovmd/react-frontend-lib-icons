import React, { FC, memo } from 'react';
import AccountStarSvg from '../svg/account-star.svg';

export interface IAccountStarIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountStarIcon: FC<IAccountStarIconProps> = memo(props => {
  return <AccountStarSvg {...props} />;
});
