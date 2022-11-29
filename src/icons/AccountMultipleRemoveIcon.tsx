import React, { FC, memo } from 'react';
import AccountMultipleRemoveSvg from '../svg/account-multiple-remove.svg';

export interface IAccountMultipleRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountMultipleRemoveIcon: FC<IAccountMultipleRemoveIconProps> = memo(props => {
  return <AccountMultipleRemoveSvg {...props} />;
});
