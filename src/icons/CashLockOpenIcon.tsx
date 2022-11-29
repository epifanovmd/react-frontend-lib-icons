import React, { FC, memo } from 'react';
import CashLockOpenSvg from '../svg/cash-lock-open.svg';

export interface ICashLockOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CashLockOpenIcon: FC<ICashLockOpenIconProps> = memo(props => {
  return <CashLockOpenSvg {...props} />;
});
