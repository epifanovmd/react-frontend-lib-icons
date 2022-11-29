import React, { FC, memo } from 'react';
import AccountBoxOutlineSvg from '../svg/account-box-outline.svg';

export interface IAccountBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountBoxOutlineIcon: FC<IAccountBoxOutlineIconProps> = memo(props => {
  return <AccountBoxOutlineSvg {...props} />;
});
