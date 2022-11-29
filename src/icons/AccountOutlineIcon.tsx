import React, { FC, memo } from 'react';
import AccountOutlineSvg from '../svg/account-outline.svg';

export interface IAccountOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountOutlineIcon: FC<IAccountOutlineIconProps> = memo(props => {
  return <AccountOutlineSvg {...props} />;
});
