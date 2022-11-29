import React, { FC, memo } from 'react';
import AccountBoxMultipleSvg from '../svg/account-box-multiple.svg';

export interface IAccountBoxMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountBoxMultipleIcon: FC<IAccountBoxMultipleIconProps> = memo(props => {
  return <AccountBoxMultipleSvg {...props} />;
});
