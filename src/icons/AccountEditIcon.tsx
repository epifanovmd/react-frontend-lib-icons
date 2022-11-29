import React, { FC, memo } from 'react';
import AccountEditSvg from '../svg/account-edit.svg';

export interface IAccountEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountEditIcon: FC<IAccountEditIconProps> = memo(props => {
  return <AccountEditSvg {...props} />;
});
