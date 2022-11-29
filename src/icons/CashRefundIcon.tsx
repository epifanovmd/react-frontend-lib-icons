import React, { FC, memo } from 'react';
import CashRefundSvg from '../svg/cash-refund.svg';

export interface ICashRefundIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CashRefundIcon: FC<ICashRefundIconProps> = memo(props => {
  return <CashRefundSvg {...props} />;
});
