import React, { FC, memo } from 'react';
import AccountMultipleMinusSvg from '../svg/account-multiple-minus.svg';

export interface IAccountMultipleMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountMultipleMinusIcon: FC<IAccountMultipleMinusIconProps> = memo(props => {
  return <AccountMultipleMinusSvg {...props} />;
});
