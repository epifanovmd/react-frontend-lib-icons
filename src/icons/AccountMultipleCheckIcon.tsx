import React, { FC, memo } from 'react';
import AccountMultipleCheckSvg from '../svg/account-multiple-check.svg';

export interface IAccountMultipleCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountMultipleCheckIcon: FC<IAccountMultipleCheckIconProps> = memo(props => {
  return <AccountMultipleCheckSvg {...props} />;
});
