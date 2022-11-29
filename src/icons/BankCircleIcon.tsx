import React, { FC, memo } from 'react';
import BankCircleSvg from '../svg/bank-circle.svg';

export interface IBankCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BankCircleIcon: FC<IBankCircleIconProps> = memo(props => {
  return <BankCircleSvg {...props} />;
});
