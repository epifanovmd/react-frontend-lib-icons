import React, { FC, memo } from 'react';
import AccountWrenchOutlineSvg from '../svg/account-wrench-outline.svg';

export interface IAccountWrenchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountWrenchOutlineIcon: FC<IAccountWrenchOutlineIconProps> = memo(props => {
  return <AccountWrenchOutlineSvg {...props} />;
});
