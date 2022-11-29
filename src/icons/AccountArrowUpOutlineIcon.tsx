import React, { FC, memo } from 'react';
import AccountArrowUpOutlineSvg from '../svg/account-arrow-up-outline.svg';

export interface IAccountArrowUpOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountArrowUpOutlineIcon: FC<IAccountArrowUpOutlineIconProps> = memo(props => {
  return <AccountArrowUpOutlineSvg {...props} />;
});
