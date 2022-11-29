import React, { FC, memo } from 'react';
import OrderBoolAscendingSvg from '../svg/order-bool-ascending.svg';

export interface IOrderBoolAscendingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OrderBoolAscendingIcon: FC<IOrderBoolAscendingIconProps> = memo(props => {
  return <OrderBoolAscendingSvg {...props} />;
});
