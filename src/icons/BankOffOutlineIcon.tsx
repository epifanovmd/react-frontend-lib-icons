import React, { FC, memo } from 'react';
import BankOffOutlineSvg from '../svg/bank-off-outline.svg';

export interface IBankOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BankOffOutlineIcon: FC<IBankOffOutlineIconProps> = memo(props => {
  return <BankOffOutlineSvg {...props} />;
});
