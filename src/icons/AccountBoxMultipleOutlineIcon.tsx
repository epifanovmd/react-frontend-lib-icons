import React, { FC, memo } from 'react';
import AccountBoxMultipleOutlineSvg from '../svg/account-box-multiple-outline.svg';

export interface IAccountBoxMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountBoxMultipleOutlineIcon: FC<IAccountBoxMultipleOutlineIconProps> = memo(props => {
  return <AccountBoxMultipleOutlineSvg {...props} />;
});
