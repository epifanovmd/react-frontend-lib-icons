import React, { FC, memo } from 'react';
import AccountMultipleSvg from '../svg/account-multiple.svg';

export interface IAccountMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountMultipleIcon: FC<IAccountMultipleIconProps> = memo(props => {
  return <AccountMultipleSvg {...props} />;
});
