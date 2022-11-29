import React, { FC, memo } from 'react';
import AccountRemoveSvg from '../svg/account-remove.svg';

export interface IAccountRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountRemoveIcon: FC<IAccountRemoveIconProps> = memo(props => {
  return <AccountRemoveSvg {...props} />;
});
