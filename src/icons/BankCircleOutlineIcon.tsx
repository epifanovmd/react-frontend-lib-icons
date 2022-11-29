import React, { FC, memo } from 'react';
import BankCircleOutlineSvg from '../svg/bank-circle-outline.svg';

export interface IBankCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BankCircleOutlineIcon: FC<IBankCircleOutlineIconProps> = memo(props => {
  return <BankCircleOutlineSvg {...props} />;
});
