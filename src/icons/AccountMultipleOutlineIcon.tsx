import React, { FC, memo } from 'react';
import AccountMultipleOutlineSvg from '../svg/account-multiple-outline.svg';

export interface IAccountMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountMultipleOutlineIcon: FC<IAccountMultipleOutlineIconProps> = memo(props => {
  return <AccountMultipleOutlineSvg {...props} />;
});
