import React, { FC, memo } from 'react';
import BankOutlineSvg from '../svg/bank-outline.svg';

export interface IBankOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BankOutlineIcon: FC<IBankOutlineIconProps> = memo(props => {
  return <BankOutlineSvg {...props} />;
});
