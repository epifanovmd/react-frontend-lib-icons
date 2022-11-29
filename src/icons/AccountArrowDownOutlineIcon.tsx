import React, { FC, memo } from 'react';
import AccountArrowDownOutlineSvg from '../svg/account-arrow-down-outline.svg';

export interface IAccountArrowDownOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountArrowDownOutlineIcon: FC<IAccountArrowDownOutlineIconProps> = memo(props => {
  return <AccountArrowDownOutlineSvg {...props} />;
});
