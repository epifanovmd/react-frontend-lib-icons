import React, { FC, memo } from 'react';
import FinanceSvg from '../svg/finance.svg';

export interface IFinanceIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FinanceIcon: FC<IFinanceIconProps> = memo(props => {
  return <FinanceSvg {...props} />;
});
