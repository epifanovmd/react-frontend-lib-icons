import React, { FC, memo } from 'react';
import AccountMinusSvg from '../svg/account-minus.svg';

export interface IAccountMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountMinusIcon: FC<IAccountMinusIconProps> = memo(props => {
  return <AccountMinusSvg {...props} />;
});
