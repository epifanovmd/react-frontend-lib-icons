import React, { FC, memo } from 'react';
import AccountCheckOutlineSvg from '../svg/account-check-outline.svg';

export interface IAccountCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountCheckOutlineIcon: FC<IAccountCheckOutlineIconProps> = memo(props => {
  return <AccountCheckOutlineSvg {...props} />;
});
