import React, { FC, memo } from 'react';
import AccountCardSvg from '../svg/account-card.svg';

export interface IAccountCardIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountCardIcon: FC<IAccountCardIconProps> = memo(props => {
  return <AccountCardSvg {...props} />;
});
