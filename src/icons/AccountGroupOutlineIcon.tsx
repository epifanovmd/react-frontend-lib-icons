import React, { FC, memo } from 'react';
import AccountGroupOutlineSvg from '../svg/account-group-outline.svg';

export interface IAccountGroupOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountGroupOutlineIcon: FC<IAccountGroupOutlineIconProps> = memo(props => {
  return <AccountGroupOutlineSvg {...props} />;
});
