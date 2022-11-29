import React, { FC, memo } from 'react';
import AccountBoxSvg from '../svg/account-box.svg';

export interface IAccountBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountBoxIcon: FC<IAccountBoxIconProps> = memo(props => {
  return <AccountBoxSvg {...props} />;
});
