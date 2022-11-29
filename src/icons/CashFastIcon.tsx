import React, { FC, memo } from 'react';
import CashFastSvg from '../svg/cash-fast.svg';

export interface ICashFastIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CashFastIcon: FC<ICashFastIconProps> = memo(props => {
  return <CashFastSvg {...props} />;
});
