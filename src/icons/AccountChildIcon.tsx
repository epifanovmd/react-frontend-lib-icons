import React, { FC, memo } from 'react';
import AccountChildSvg from '../svg/account-child.svg';

export interface IAccountChildIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountChildIcon: FC<IAccountChildIconProps> = memo(props => {
  return <AccountChildSvg {...props} />;
});
