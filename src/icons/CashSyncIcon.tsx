import React, { FC, memo } from 'react';
import CashSyncSvg from '../svg/cash-sync.svg';

export interface ICashSyncIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CashSyncIcon: FC<ICashSyncIconProps> = memo(props => {
  return <CashSyncSvg {...props} />;
});
