import React, { FC, memo } from 'react';
import BankSvg from '../svg/bank.svg';

export interface IBankIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BankIcon: FC<IBankIconProps> = memo(props => {
  return <BankSvg {...props} />;
});
