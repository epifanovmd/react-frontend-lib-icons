import React, { FC, memo } from 'react';
import AccountMultiplePlusOutlineSvg from '../svg/account-multiple-plus-outline.svg';

export interface IAccountMultiplePlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountMultiplePlusOutlineIcon: FC<IAccountMultiplePlusOutlineIconProps> = memo(props => {
  return <AccountMultiplePlusOutlineSvg {...props} />;
});
