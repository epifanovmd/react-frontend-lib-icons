import React, { FC, memo } from 'react';
import AccountPlusOutlineSvg from '../svg/account-plus-outline.svg';

export interface IAccountPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountPlusOutlineIcon: FC<IAccountPlusOutlineIconProps> = memo(props => {
  return <AccountPlusOutlineSvg {...props} />;
});
