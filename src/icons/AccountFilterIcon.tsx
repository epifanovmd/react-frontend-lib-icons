import React, { FC, memo } from 'react';
import AccountFilterSvg from '../svg/account-filter.svg';

export interface IAccountFilterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountFilterIcon: FC<IAccountFilterIconProps> = memo(props => {
  return <AccountFilterSvg {...props} />;
});
