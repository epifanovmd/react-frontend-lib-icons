import React, { FC, memo } from 'react';
import CashRegisterSvg from '../svg/cash-register.svg';

export interface ICashRegisterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CashRegisterIcon: FC<ICashRegisterIconProps> = memo(props => {
  return <CashRegisterSvg {...props} />;
});
