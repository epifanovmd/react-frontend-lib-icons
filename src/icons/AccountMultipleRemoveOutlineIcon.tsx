import React, { FC, memo } from 'react';
import AccountMultipleRemoveOutlineSvg from '../svg/account-multiple-remove-outline.svg';

export interface IAccountMultipleRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountMultipleRemoveOutlineIcon: FC<IAccountMultipleRemoveOutlineIconProps> = memo(props => {
  return <AccountMultipleRemoveOutlineSvg {...props} />;
});
