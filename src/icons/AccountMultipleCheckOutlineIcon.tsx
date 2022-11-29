import React, { FC, memo } from 'react';
import AccountMultipleCheckOutlineSvg from '../svg/account-multiple-check-outline.svg';

export interface IAccountMultipleCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountMultipleCheckOutlineIcon: FC<IAccountMultipleCheckOutlineIconProps> = memo(props => {
  return <AccountMultipleCheckOutlineSvg {...props} />;
});
