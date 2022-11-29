import React, { FC, memo } from 'react';
import BankPlusSvg from '../svg/bank-plus.svg';

export interface IBankPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BankPlusIcon: FC<IBankPlusIconProps> = memo(props => {
  return <BankPlusSvg {...props} />;
});
