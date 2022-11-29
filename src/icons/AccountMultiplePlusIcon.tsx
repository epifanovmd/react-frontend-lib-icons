import React, { FC, memo } from 'react';
import AccountMultiplePlusSvg from '../svg/account-multiple-plus.svg';

export interface IAccountMultiplePlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountMultiplePlusIcon: FC<IAccountMultiplePlusIconProps> = memo(props => {
  return <AccountMultiplePlusSvg {...props} />;
});
