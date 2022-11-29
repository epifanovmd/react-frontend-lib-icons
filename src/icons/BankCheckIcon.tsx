import React, { FC, memo } from 'react';
import BankCheckSvg from '../svg/bank-check.svg';

export interface IBankCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BankCheckIcon: FC<IBankCheckIconProps> = memo(props => {
  return <BankCheckSvg {...props} />;
});
