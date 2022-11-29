import React, { FC, memo } from 'react';
import CashMinusSvg from '../svg/cash-minus.svg';

export interface ICashMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CashMinusIcon: FC<ICashMinusIconProps> = memo(props => {
  return <CashMinusSvg {...props} />;
});
