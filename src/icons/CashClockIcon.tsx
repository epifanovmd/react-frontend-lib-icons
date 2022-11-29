import React, { FC, memo } from 'react';
import CashClockSvg from '../svg/cash-clock.svg';

export interface ICashClockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CashClockIcon: FC<ICashClockIconProps> = memo(props => {
  return <CashClockSvg {...props} />;
});
