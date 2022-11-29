import React, { FC, memo } from 'react';
import CashLockSvg from '../svg/cash-lock.svg';

export interface ICashLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CashLockIcon: FC<ICashLockIconProps> = memo(props => {
  return <CashLockSvg {...props} />;
});
