import React, { FC, memo } from 'react';
import BankOffSvg from '../svg/bank-off.svg';

export interface IBankOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BankOffIcon: FC<IBankOffIconProps> = memo(props => {
  return <BankOffSvg {...props} />;
});
