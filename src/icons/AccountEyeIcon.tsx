import React, { FC, memo } from 'react';
import AccountEyeSvg from '../svg/account-eye.svg';

export interface IAccountEyeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountEyeIcon: FC<IAccountEyeIconProps> = memo(props => {
  return <AccountEyeSvg {...props} />;
});
