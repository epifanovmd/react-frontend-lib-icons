import React, { FC, memo } from 'react';
import CashSvg from '../svg/cash.svg';

export interface ICashIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CashIcon: FC<ICashIconProps> = memo(props => {
  return <CashSvg {...props} />;
});
