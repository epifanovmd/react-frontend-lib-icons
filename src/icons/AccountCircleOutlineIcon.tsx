import React, { FC, memo } from 'react';
import AccountCircleOutlineSvg from '../svg/account-circle-outline.svg';

export interface IAccountCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountCircleOutlineIcon: FC<IAccountCircleOutlineIconProps> = memo(props => {
  return <AccountCircleOutlineSvg {...props} />;
});
